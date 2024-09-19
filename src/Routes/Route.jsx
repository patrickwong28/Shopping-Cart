import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Shop from '../Pages/Shop';
import NavbarWrapper from '../Components/NavbarWrapper';
import Cart from '../Pages/Cart';

const routes = [
  {
    path: '/',
    element: <NavbarWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
