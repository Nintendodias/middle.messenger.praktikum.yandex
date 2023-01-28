import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Button.hbs';

type TProps = Record<string, unknown>;

export default class Button extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction(this.props);
  }
}
