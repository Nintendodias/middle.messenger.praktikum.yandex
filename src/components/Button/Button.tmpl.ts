/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div class='form__button'>
    <input
      type='submit'
      value='{{this.value}}'
      class='form__button--button {{this.className}}'
      {{this.disabled}}
    />
    <div class='form__button--error'></div>
  </div>
{{/each}}

`;

export default tpl;
