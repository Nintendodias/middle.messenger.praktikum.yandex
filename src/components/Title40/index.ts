import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Title40.hbs';

type TProps = Record<string, unknown>;

export default class Title40 extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction(this.props);
  }
}
