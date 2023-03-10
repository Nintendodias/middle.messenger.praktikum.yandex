import Block from './Block';

export default function render(query: string, block: any, index: number = 0) {
  const root = document.querySelectorAll(query);

  root[index].innerHTML = '';

  if ((block as Block)._element) {
    ((block as Block)._element as Array<Element>).forEach((el) => {
      root[index].appendChild(el);
      return root;
    });
  }
}
