import './index.less';
import Block from '../../utils/Block';
import template from './Messages.hbs';
import Connect from '../../utils/Store/Connect';

type TProps = Record<string, unknown>;

class Messages extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Connect(Messages, (state) => {
  return { data: state.messages };
});
