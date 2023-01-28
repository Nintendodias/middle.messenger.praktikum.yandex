import "./index.less";
import Block from "../../utils/Block";
import templateFunction from "./ContactsItems.hbs";

export default class ContactsItems extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return templateFunction({ data: this.props.data });
  }
}
