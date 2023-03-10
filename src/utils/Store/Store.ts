/* eslint-disable no-constructor-return */
/* eslint-disable @typescript-eslint/naming-convention */
import EventBus from '../EventBus';
import { IState } from './store.api';

export default class Store extends EventBus {
  static EVENT_UPDATE: string = 'updated';

  static _instance: Store;

  static STORE_NAME = 'myAppStore';

  _state: IState = {};

  constructor() {
    if (Store._instance) return Store._instance;

    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);

    this._state = savedState ? JSON.parse(savedState) ?? {} : {};

    Store._instance = this;

    this.on(Store.EVENT_UPDATE, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
    });
  }

  getState() {
    return this._state;
  }

  removeState() {
    this._state = {};
    this.emit(Store.EVENT_UPDATE);
  }

  set(id: string, value: any) {
    this._state[id] = value;
    this.emit(Store.EVENT_UPDATE);
    return this;
  }
}
