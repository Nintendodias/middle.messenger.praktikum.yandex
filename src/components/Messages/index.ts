import './index.less';
import Block from '../../utils/Block';
import templateFunction from './Messages.hbs';

export default class Messages extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return templateFunction({ data: this.props.data });
  }
}
