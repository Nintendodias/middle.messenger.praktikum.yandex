/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div class='form_container'>
    <div data-render='title20'></div>
    <form class='form'>
      <div data-render='title20'></div>
      <div data-render='inputs'></div>
      <div data-render='button'></div>
    </form>
    <div data-render='img'></div>
  </div>
{{/each}}
`;

export default tpl;
