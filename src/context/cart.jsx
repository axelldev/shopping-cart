import { useReducer, createContext } from 'react'
import { getCartItems } from '../services/cart'
import { CART_ACTIONS } from '../reducer/actions'

export const CartContext = createContext()

const initialState = getCartItems()
const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const product = payload
      const index = state.findIndex((item) => item.id === product.id)
      const isInTheCart = index > -1
      const newCart = structuredClone(state)
      if (isInTheCart) {
        newCart[index].quantity += 1
        return newCart
      }
      const newItem = structuredClone(product)
      newCart.push({ ...newItem, quantity: 1 })
      return newCart
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productId = payload
      return state.filter((item) => item.id !== productId)
    }

    case CART_ACTIONS.DECREMENT: {
      const productId = payload
      const cartItem = state.find((item) => productId === item.id)
      if (!cartItem) return state
      const newQuantity = cartItem.quantity - 1
      if (newQuantity <= 0) {
        return state.filter((item) => item.id !== productId)
      }
      return state.map((item) => {
        if (item.id !== productId) return item
        const newItem = structuredClone(item)
        newItem.quantity -= 1
        return newItem
      })
    }

    case CART_ACTIONS.CLEAR_CART: {
      return []
    }
  }
}

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => dispatch({
    type: CART_ACTIONS.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = (productId) => dispatch({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: productId
  })

  const decrementQuantity = (productId) => dispatch({
    type: CART_ACTIONS.DECREMENT,
    payload: productId
  })

  const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR_CART })

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
