/* eslint-disable no-tabs */
const tpl: string = `
{{#each data}}
    <div class="tooltip__link" >
        <img class="tooltip__icon" src="{{this.icon}}" alt="">
        <span class="tooltip__title">{{this.text}}</a></span>
    </div>
{{/each}}

`;

export default tpl;
