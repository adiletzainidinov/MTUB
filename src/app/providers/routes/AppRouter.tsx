import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivatRouter from './PrivatRouter'
import ErrorPage from './ErrorPage'
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector'
import { guestRoutes } from './quesRoutes'
import { userRoutes } from './userRouter'
import { adminRoutes } from './adminRoutes'

const AppRouter = () => {
   const { isAuth, role } = useAppSelector((state) => state.auth)

   // console.log(role)
   // console.log(isAuth);
   

   const router = createBrowserRouter([
      {
         path: '/',
         element: (
            <PrivatRouter
               isAuth={role === 'GUEST' ? !isAuth : isAuth}
               role={role}
               isAllowed={['USER', 'GUEST']}
               component={'lending'}
               fallBackPath="/admin"
            />
         ),
      },
      {
         path: '/auth',
         element: (
            <PrivatRouter
               isAuth={!isAuth}
               role={role}
               isAllowed={['GUEST']}
               component={'GuestLayout'}
               fallBackPath="/"
            />
         ),
         children: guestRoutes,
      },

      {
         path: '/user',
         element: (
            <PrivatRouter
               isAuth={isAuth}
               role={role}
               isAllowed={['USER']}
               component={'UserLoyaut'}
               fallBackPath="/"
            />
         ),
         children: userRoutes,
      },

      {
         path: '/admin',
         element: (
            <PrivatRouter
               isAuth={isAuth}
               role={role}
               isAllowed={['ADMIN']}
               component={'AdminLoyaut'}
               fallBackPath="/"
            />
         ),
         children: adminRoutes,
      },

      {
         path: '*',
         element: <ErrorPage />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRouter