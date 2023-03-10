/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div class='text-link {{this.className}} '>{{this.text}}</div>
{{/each}}
`;

export default tpl;
