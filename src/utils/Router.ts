/* eslint-disable max-params */
import Block from './Block';
import Render from './Render';

function isEqual(lhs: any, rhs: any) {
  return lhs === rhs;
}

interface IRouterProps {
  rootQuery: string;
}

interface IChild {
  name: string;
  node: HTMLElement;
}

interface IComponentProps {
  attributes?: any;
  child?: IChild | HTMLElement | string;
  events?: Record<string, (...args: any) => void>;

  [key: string]: any;
}

export class Route {
  private _pathname: string;

  private _blockClass: any;

  private _block: Block;

  private _props: IRouterProps;

  private _componentProps: IComponentProps;

  constructor(pathname: string, view: Block, props: IRouterProps, componentProps: IComponentProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
    this._componentProps = componentProps;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    this._block?.leave();
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._componentProps);
      Render(this._props.rootQuery, this._block);
      return;
    }

    Render(this._props.rootQuery, this._block);
  }
}

export default class Router {
  private static __instance: Router;

  public history: History;

  private routes: Route[];

  private _currentRoute: Route | null = null;

  private _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  static getInstance() {
    return this.__instance;
  }

  public use(pathname: string, block: any, props: {}) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery }, props);

    this.routes.push(route);
    return this;
  }

  public start() {
    window.onpopstate = (event: any) => {
      this._onRoute(event.currentTarget?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    this._currentRoute?.leave();
    this._currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public reset() {
    this.routes = [];
    this._currentRoute = null;
  }

  public getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
