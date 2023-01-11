import './index.less';
import '../../components/ContactsItems/index.js'
import '../../components/Messages/index.js'

const menu = document.querySelector('.burger__menu');

menu.addEventListener('click', e => {
    const tooltip = document.querySelector('.chat__menu .tooltip');

    tooltip.classList.toggle('_active');
});

const include = document.querySelector('.msg__include img');

include.addEventListener('click', e => {
    const tooltip = document.querySelector('.chat__messages .tooltip');

    tooltip.classList.toggle('_active');
});