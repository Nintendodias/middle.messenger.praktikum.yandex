/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div>
    <form class='form'>
      <div data-render='inputs'></div>
      <div data-render='button_wrapper'></div>
    </form>
    <div data-render='img'></div>
  </div>
{{/each}}
`;

export default tpl;
