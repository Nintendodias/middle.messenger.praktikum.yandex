export default function render(
  query: string,
  block: any,
  index: number = 0
): object {
  const root = document.querySelectorAll(query);

  block._element.forEach((el) => {
    root[index].innerHTML = '';
    root[index].appendChild(el);

    return root;
  });
}
