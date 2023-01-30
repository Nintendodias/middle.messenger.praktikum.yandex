import EventBus from './EventBus';

type TProps = Record<string, unknown>;

class Block {
  private static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null = null;

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

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: (context: any) => string, data: any) {
    const dataObj = { ...data };
    const htmlString = template(dataObj);
    const tmpl = document.createElement('template');
    tmpl.innerHTML = htmlString;
    this._element = tmpl.content;

    return tmpl.content;
  }

  private _render(): void {
    const block = this.render();
    if (this._element) {
      const children = Array.from(block.children);
      this._element = this._addEvents(children);
    }
  }

  _addEvents(children) {
    children.forEach((el, index) => {
      const { events } = this.props.data[index];

      if (!events) {
        return;
      }

      Object.entries(events).forEach(([event, listener]) => {
        el.querySelector('input').addEventListener(event, listener);
      });
    });
    
    return children
    // this.props.data.forEach((prop) => {
    //   const { events } = prop as ;

    //   if (!events) {
    //     return;
    //   }

    //   Object.entries(events).forEach(([event, listener]) => {
    //     el.addEventListener(event, listener);
    //   });
    // });
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: TProps) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
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

  // public show() {
  //   if (this.getContent() !== null) {
  //     this.getContent().style.display = 'block';
  //   }
  // }

  // public hide() {
  //   this.getContent().style.display = 'none';
  // }
}

export default Block;
