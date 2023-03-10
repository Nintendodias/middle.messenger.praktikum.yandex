/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div class='message__item {{this.isSelf}}'>
    <div class='message__item-inner'>
      <p class='message__item-text'>{{this.text}}</p>
      <p class='message__item-date'>{{this.date}}</p>
    </div>
  </div>
{{/each}}

`;

export default tpl;
