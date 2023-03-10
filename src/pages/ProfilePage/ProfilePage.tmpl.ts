/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <main class='wrapper'>
    <div class='form-container'>
      <div data-render='avatar'></div>
      <form class='form' data-form='profile-data'>
        <div data-render='title20_0'></div>
        <div data-render='inputs0'></div>
        <div data-render='button_wrapper0'></div>
      </form>
      <div data-render='btn-link'></div>
      <div data-render='links'></div>
      <div class='modal' data-render='modal0'></div>
      <div class='modal' data-render='modal1'></div>
    </div>
  </main>
{{/each}}
`;

export default tpl;
