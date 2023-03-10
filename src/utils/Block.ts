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

  public _element: HTMLElement | null | Array<Element> = null;

  private _children: Array<Element> | null = null;

  private _meta: {
    tagName: string;
    props: object;
    childrenComponents: Array<any>;
  };

  private eventBus: () => EventBus;

  public props: object;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

  constructor(
    tagName: string = 'div',
    props: TProps = {},
    childrenComponents: Array<any> = [],
  ) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      childrenComponents,
    };

    this.eventBus = () => eventBus;
    this.props = this._makePropsProxy(props);
    this._element = null;

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

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  public componentDidUpdate(oldProps: unknown[], newProps: unknown[]): Boolean {
    return oldProps !== newProps;
  }

  public setProps = (nextProps: unknown[]): void => {
    if (!nextProps) {
      return;
    }

    const oldProps = { ...this.props };

    if (Object.values(nextProps).length) {
      Object.assign(this.props, nextProps);
    }
    const args = [oldProps, this.props];

    this.eventBus().emit(Block.EVENTS.FLOW_CDU, args);
  };

  get element() {
    return this._element;
  }

  protected render(): DocumentFragment | undefined {
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

    if (block) {
      this._removeEvents();

      if (this._element) {
        this._children = Array.from(block.children);
        this._addEvents();
        this._element = this._children;
        this._addChildrenComponents();
      }
    }
  }

  private _addChildrenComponents(): void {
    if (this._children) {
      const { childrenComponents } = this._meta;

      if (childrenComponents && childrenComponents.length > 0) {
        childrenComponents.forEach((component) => {
          if (this._element) {
            if ((this._element as Array<Element>).length > 0) {
              const qSel = (
                this._element as Array<Element>
              )[0].querySelectorAll(component.props.target);

              if (qSel.length > 0) {
                const curentElements: Array<Element> = component.element;

                curentElements.forEach((el) => {
                  qSel[0].appendChild(el);
                });
              }
            }
          }
        });
      }
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
          if ((this.props as TProps).data) {
            const proEl = (this.props as TProps).data[index];

            if (proEl) {
              const { events }: Record<string, () => void> = proEl;

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
          }
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
