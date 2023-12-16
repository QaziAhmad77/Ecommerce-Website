import { productsData } from './api/Api';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: productsData,
        },
        {
          path: '/product/:id',
          element: <Product />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
