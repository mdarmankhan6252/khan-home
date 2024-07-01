import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage';
import Root from './Route/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthProvider from './Provider/AuthProvider';
import FeatureDetails from './components/Home/Feature/FeatureDetails';
import PrivateRoute from './Route/PrivateRoute';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/fake_data.json') 
      },
      {
        path:'/about',
        element:<About></About>,
        loader:() => fetch('/fake_data.json')
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/feature/:id',
        element:<PrivateRoute><FeatureDetails></FeatureDetails></PrivateRoute>,
        loader:() => fetch('/fake_data.json')
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
