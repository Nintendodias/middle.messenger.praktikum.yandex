import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Input.hbs';

type TProps = Record<string, unknown>;

export default class Input extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return templateFunction({ data: this.props.data });
  }
}
