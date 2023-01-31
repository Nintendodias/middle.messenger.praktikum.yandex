import './index.less';
import Block from '../../utils/Block';
import template from './ButtonTooltip.hbs';

type TProps = Record<string, unknown>;

export class ButtonTooltip extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const openTooltip = (event: any): void => {
  const parent: Element = event.target.parentNode.parentNode;
  const tooltip: Element | null = parent.querySelector('.tooltip ');

  if (tooltip) {
    tooltip.classList.toggle('_active');
  }
};
