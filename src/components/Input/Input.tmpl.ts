/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
  <div class='form__item'>
    <label
      for='{{this.labelFor}}'
      class='form__label'
    >{{this.labelText}}</label>
    <input
      type='{{this.inputType}}'
      id='{{this.inputId}}'
      name='{{this.inputName}}'
      value='{{this.value}}'
      {{this.readonly}}
      class='form__input'
    />
    <span class='form__error'></span>
  </div>
{{/each}}
`;

export default tpl;
