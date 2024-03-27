//**The entry point for the React application, where the App component is rendered. */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import ProductPage from './pages/ProductPage'
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
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
        path: '/profile',
        element: <Profile />
      }, {
        path: '/aboutus',
        element: <AboutUs />
      },{
        path: '/Cart',
        element: <Cart />
      } , {
        path: '/product/:productID',
        element: <ProductPage />
      }
    ]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)