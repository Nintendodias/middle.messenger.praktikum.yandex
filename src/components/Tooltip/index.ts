import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Tooltip.hbs';

type TProps = Record<string, unknown>;

export default class Tooltip extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction({ data: this.props.data });
  }
}
