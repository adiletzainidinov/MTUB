import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../../../pages/HomePage/ui/HomePage';



const AppRouter = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage videoId='' />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
