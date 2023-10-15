import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FiltersProvider } from './context/filters'
import { CartProvider } from './context/cart'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
)
