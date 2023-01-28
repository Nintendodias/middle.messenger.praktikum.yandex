import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Avatar.hbs';

type TProps = Record<string, unknown>;

export default class Avatar extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction(this.props);
  }
}
