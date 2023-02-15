import Router from './utils/Router';
import LoginPage from './pages/login';

const router = new Router('#root');

console.log(router);

router.use('/', LoginPage, {});
