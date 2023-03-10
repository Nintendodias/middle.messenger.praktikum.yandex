/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <button
    class='btn btn-link'
    data-modal='{{this.dataset}}'
  >{{this.text}}</button>
{{/each}}
`;

export default tpl;
