import './index.less';
import Block from '../../utils/Block';
import template from './Title40.hbs';

type TProps = Record<string, unknown>;

export default class Title40 extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
