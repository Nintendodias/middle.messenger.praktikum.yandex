export default function render(
  query: string,
  block: any,
  index: number = 0
): object {
  const root = document.querySelectorAll(query);
  root[index].innerHTML = '';

  block._element.forEach((el) => {
    root[index].appendChild(el);
    return root;
  });
}
