import './index.less';
import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import tmpl from './Title20.tmpl';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

export default class Title20 extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
