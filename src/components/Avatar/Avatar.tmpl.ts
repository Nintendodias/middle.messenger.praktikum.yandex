/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div class='profile_avatar'>
    <img src='{{this.url}}' alt='' />
  </div>
{{/each}}
`;

export default tpl;
