import EventBus from './EventBus';

type TProps = {
  [data: string]: any;
};

class Block {
  private static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null | Array<Element> = null;

  private _children: Array<Element> | null = null;

  private _meta: {
    tagName: string;
    props: object;
  };

  private eventBus: () => EventBus;

  public props: object;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

  constructor(tagName: string = 'div', props: TProps = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.eventBus = () => eventBus;
    this.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  public init(): void {
    this._createResources();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  public componentDidMount() {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: unknown[], newProps: unknown[]): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  public componentDidUpdate(oldProps: unknown[], newProps: unknown[]): Boolean {
    if (oldProps && newProps) {
      return true;
    }
    return false;
  }

  public setProps = (nextProps: unknown[]): void => {
    if (!nextProps) {
      return;
    }

    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, nextProps);

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  // eslint-disable-next-line class-methods-use-this
  protected compile(template: (context: any) => string, data: any) {
    const dataObj = { ...data };
    const htmlString = template(dataObj);
    const tmpl = document.createElement('template');
    tmpl.innerHTML = htmlString;

    return tmpl.content;
  }

  private _render(): void {
    const block = this.render();
    this._removeEvents();
    if (this._element) {
      this._children = Array.from(block.children);
      this._addEvents();
      this._element = this._children;
    }
  }

  _addEvents() {
    if (this._children) {
      this._children.forEach((el, index) => {
        if (this.props) {
          const { events }: Record<string, () => void> = (this.props as TProps)
            .data[index];

          if (!events) {
            return;
          }

          Object.entries(events).forEach(([event, listener]) => {
            const target = el.querySelector('input')
              ? el.querySelector('input')
              : el;

            if (target) {
              target.addEventListener(event, listener);
            }
          });
        }
      });
    }
  }

  _removeEvents() {
    if (this._children) {
      this._children.forEach((el, index) => {
        if (this.props) {
          const { events }: Record<string, () => void> = (this.props as TProps)
            .data[index];

          if (!events) {
            return;
          }

          Object.entries(events).forEach(([event, listener]) => {
            const target = el.querySelector('input')
              ? el.querySelector('input')
              : el;

            if (target) {
              target.removeEventListener(event, listener);
            }
          });
        }
      });
    }
  }

  private _makePropsProxy(props: TProps) {
    const self = this;

    return new Proxy(props, {
      get(target: TProps, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: TProps, prop: string, value: string) => {
        const oldValue = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  getContent() {
    return this.element;
  }

  leave() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  }
}

export default Block;
