import './index.less';
import Block from '../../utils/Block';
import template from './Image.hbs';
import { getChatProperties } from '../../utils/Store/Actions';

type TProps = Record<string, unknown>;

export default class Image extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
