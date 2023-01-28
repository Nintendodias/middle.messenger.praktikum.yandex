import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Title20.hbs';

type TProps = Record<string, unknown>;

export default class Title20 extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction(this.props);
  }
}
