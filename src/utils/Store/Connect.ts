import Store from './Store';
import Render from '../Render';
import { IState } from './store.api';

type TTag = {
  target: string;
  data: Array<any>;
};

type TProps = {
  data: Array<any>;
};

type TConstructable = {
  new (tag: TTag, props: TProps): any;
};

export default function Connect(
  Component: TConstructable,
  mapStateToProps: (state: IState) => any,
) {
  return class extends Component {
    constructor(tag: TTag, props: TProps = { data: [] }) {
      const store = new Store();
      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.on(Store.EVENT_UPDATE, () => {
        const newProps = { ...mapStateToProps(store.getState()) };
        this.setProps(newProps);
        Render({ ...this.props }.target, this);
      });
    }
  };
}
