import AccountDetails from '../components/navbar/accountdetails/accountDetails'
import LikedPage from '../pages/likepage/LikedPage'
import CartPage from '../pages/cartpage/CartPage'
import ProductDetail from '../pages/productDetail/ProductDetail'
import BlogPage from '../components/Blog'
import Home from '../pages/home'
import { createBrowserRouter } from 'react-router-dom'
import AccountPage from '../pages/accountPage/accountPage'
import Wishlist from '../pages/accountPage/wishlist'
import MyProducts from '../pages/accountPage/myProducts'
import TrackOrder from '../pages/accountPage/trackOrder'
import Address from '../pages/accountPage/address'
import Footer from '../components/footer'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/liked', element: <LikedPage /> },
  { path: '/blog', element: <BlogPage /> }, 

  {
    path: '/account',
    element: <AccountPage />,
    children: [
      { index: true, element: <AccountDetails /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'my-products', element: <MyProducts /> },
      { path: 'track-order', element: <TrackOrder /> },
      { path: 'address', element: <Address /> },
    ]
  },
  { path: '/footer', element: <Footer /> }, 
])
