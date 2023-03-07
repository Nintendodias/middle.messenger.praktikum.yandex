import Store from './Store';
import Render from '../Render';

export default function connect(Component, mapStateToProps) {
  return class extends Component {
    constructor(tag, props = {}) {
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
