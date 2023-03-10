/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <img class='{{this.className}}' src='{{this.link}}' alt='' />
{{/each}}

`;

export default tpl;
