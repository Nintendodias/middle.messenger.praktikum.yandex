export default function render(query: string, block: any, index: number = 0): object {
  const root = document.querySelectorAll(query);
  root[index].appendChild(block.getContent());

  return root;
}
