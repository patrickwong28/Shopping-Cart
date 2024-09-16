import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Shop from './Pages/Shop';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
];

export default routes;
