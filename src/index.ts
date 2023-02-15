import Router from './utils/Router';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/signIn';

const router = new Router('#root');

router
  .use('/', LoginPage, { data: [{}] })
  .use('/sign-in', SignInPage, { data: [{}] })
  .start();
