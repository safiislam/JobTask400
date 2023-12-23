import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Product from './Pages/Product/Product.jsx'
import ProdcutDetailsPage from './Pages/ProductDetails/ProdcutDetailsPage.jsx'
import AddToCartProduct from './Pages/AddToCartProduct/AddToCartProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProdcutDetailsPage />
      },
      {
        path: "/cart_product",
        element: <AddToCartProduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
