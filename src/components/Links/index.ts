import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Links.hbs';

type TProps = Record<string, unknown>;

export default class Links extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction(this.props);
  }
}
