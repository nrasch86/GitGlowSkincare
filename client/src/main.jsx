//**The entry point for the React application, where the App component is rendered. */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';

import AboutUs from './pages/AboutUs';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Cart from './pages/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/Cart',
        element: <Cart />
      }, {
        path: '/aboutus',
        element: <AboutUs />
      }
    ]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)