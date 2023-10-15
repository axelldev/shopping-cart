import { useEffect, useContext } from 'react'
import { saveCart } from '../services/cart'
import { CartContext } from '../context/cart'

export function useCart () {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used withing a CartPorvider')
  }

  const {
    cart,
    addToCart,
    removeFromCart,
    decrementQuantity,
    clearCart
  } = context

  const existsInTheCart = ({ productId }) => {
    return cart.find(item => item.id === productId) ?? false
  }

  const totalItems = cart.reduce((pre, curr) => pre + curr.quantity, 0)

  useEffect(() => {
    // save the cart changes on the local storage
    saveCart({ cart })
  }, [cart])

  return {
    cart,
    totalItems,
    addToCart,
    removeFromCart,
    decrementQuantity,
    clearCart,
    existsInTheCart
  }
}
