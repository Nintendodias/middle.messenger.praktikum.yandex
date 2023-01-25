import './index.less';
import '../../components/ContactsItems/index.ts';
import '../../components/Messages/index.ts';

const menu = document.querySelector('.burger__menu');

menu.addEventListener('click', () => {
  const tooltip = document.querySelector('.chat__menu .tooltip');

  tooltip.classList.toggle('_active');
});

const include = document.querySelector('.msg__include img');

include.addEventListener('click', () => {
  const tooltip = document.querySelector('.chat__messages .tooltip');

  tooltip.classList.toggle('_active');
});
