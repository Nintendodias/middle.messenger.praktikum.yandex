/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <main class='wrapper'>
    <div class='form-container'>
      <form class='form'>
        <div data-render='title20'></div>
        <div data-render='inputs'></div>
        <div data-render='button'></div>
      </form>
      <div data-render='links'></div>
    </div>
  </main>
{{/each}}

`;

export default tpl;
