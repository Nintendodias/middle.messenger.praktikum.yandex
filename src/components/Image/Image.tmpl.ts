/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <img
    width='{{this.width}}'
    height='{{this.height}}'
    src='{{this.url}}'
    alt=''
    class='{{this.class}}'
  />
{{/each}}
`;

export default tpl;
