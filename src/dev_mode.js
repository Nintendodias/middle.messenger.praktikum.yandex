
const tmpl = `<nav class="dev_mode">
<div>
  <%- include('../../components/Title40/Title40', {'text': '404'})%> 
  <span>Меню разработчика</span>
  <ul>
    <li><a href="./pages/login/login.ejs">Логин</a></li>
    <li><a href="./pages/signIn/signIn.ejs">Регистрация</a></li>
    <li><a href="./pages/err500/err500.ejs">Ошибка_500</a></li>
    <li><a href="./pages/err400/err400.ejs">Ошибка_400</a></li>
    <li><a href="./pages/main/main.ejs">Главная</a></li>
    <li><a href="./pages/profile/profile.ejs">Профиль</a></li>
  </ul>
</div>
</nav>`;

export default tmpl;