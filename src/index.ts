import Router from './utils/Router';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import MessengerPage from './pages/MessengerPage';
import { user } from './utils/API';
import { setUserId } from './utils/Store/Actions';

user()
  .then((_value) => {
    setUserId(JSON.parse(_value).id);
    if (window.location.pathname !== '/profile') {
      Router.getInstance().go('/messenger');
    }
  })
  .catch((_error) => {
    if (window.location.pathname !== '/sign-in') {
      Router.getInstance().go('/');
    }
  });

const router = new Router('#root');

router
  .use('/', LoginPage, { data: [{}] })
  .use('/sign-in', SignInPage, { data: [{}] })
  .use('/profile', ProfilePage, { data: [{}] })
  .use('/404', ErrorPage, { data: [{ code: 404 }] })
  .use('/500', ErrorPage, { data: [{ code: 500 }] })
  .use('/messenger', MessengerPage, { data: [{}] })
  .start();
