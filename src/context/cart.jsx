import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const {
    state,
    addToCart,
    removeFromCart,
    decrementQuantity,
    clearCart
  } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      decrementQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
