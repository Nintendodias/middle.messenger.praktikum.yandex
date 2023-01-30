import './index.less';
import Block from '../../utils/Block';
import template from './Tooltip.hbs';

type TProps = Record<string, unknown>;

export default class Tooltip extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
