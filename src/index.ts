import Router from './utils/Router';
import LoginPage from './pages/LoginPage';

const router = new Router('#root');

router.use('/', LoginPage, { data: [{}] }).start();
