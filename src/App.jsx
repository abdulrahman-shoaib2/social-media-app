import './styles/App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
// import SignIn from './pages/SignIn';
// import Feeds from './pages/Feeds';
// import PostDetails from './pages/PostDetails';
// import SignUp from './pages/SignUp';
// import Community from './pages/community';
// import Bookmark from './pages/bookmark';
// import Settings from './pages/settings';
// import Notifications from './pages/notifications';
// import Profile from './pages/Profile';
import AuthContextProvider from './contexts/AuthContext';
import AuthProtectedRoute from './protectedRoutes/AuthProtectedRoute';
import MainProtectedRoute from './protectedRoutes/MainProtectedRoute';
import UserContextProvider from './contexts/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Test from './pages/Test';


import { lazy, Suspense } from 'react';

const Feeds = lazy(() => import('./pages/Feeds'));
const PostDetails = lazy(() => import('./pages/PostDetails'));
const Profile = lazy(() => import('./pages/Profile'));
const Community = lazy(() => import('./pages/Community'));
const Bookmark = lazy(() => import('./pages/Bookmark'));
const Settings = lazy(() => import('./pages/Settings'));
const Notifications = lazy(() => import('./pages/Notifications'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,   
      gcTime: 1000 * 60 * 10,     
      retry: 1,                   
      refetchOnWindowFocus: false,
    },
  },
});
const router =createBrowserRouter([
  {element: <MainProtectedRoute><MainLayout /></MainProtectedRoute> ,children:[
    {index:true, element:<Suspense><Feeds /></Suspense> },
    {path:'posts/:postId', element:<Suspense><PostDetails /></Suspense>},
    {path:'profile/:userName', element:<Suspense><Profile /></Suspense>},
    {path:'notifications', element:<Suspense><Notifications /></Suspense>},
    {path:'test', element:<Suspense><Test /></Suspense>},
    {path:'community', element:<Suspense><Community /></Suspense>},
    {path:'bookmark', element:<Suspense><Bookmark /></Suspense>},
    {path:'settings', element:<Suspense><Settings /></Suspense>},
  ]},
  {element: <AuthProtectedRoute><AuthLayout  /> </AuthProtectedRoute>,children:[
    {path:'signin',element:<Suspense><SignIn /></Suspense>},
    {path:'signup',element:<Suspense><SignUp order={1} /></Suspense>},
  ]}
])

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      <AuthContextProvider>
        <UserContextProvider>
          <HeroUIProvider >
            <ToastProvider placement={'top-center'} toastOffset={60} />
            <RouterProvider router={router} />
          </HeroUIProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

