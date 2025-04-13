import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {ToastContainer} from 'react-toastify';
import ProductDetails from './pages/Product_Details.jsx';
import store from './redux/store.jsx';
import './index.css'
import App from './App.jsx'
import CartPage from './pages/Cart.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ProductDetails />   */}
      <CartPage />
      {/* <App /> */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
    </Provider>
  </StrictMode>,
)
