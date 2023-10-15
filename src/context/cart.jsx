import { useReducer, createContext } from 'react'
import { getCartItems } from '../services/cart'
import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT, CLEAR_CART } from '../reducer/actions/cart'

export const CartContext = createContext()

const initialState = getCartItems()
const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART: {
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

    case REMOVE_FROM_CART: {
      const productId = payload
      return state.filter((item) => item.id !== productId)
    }

    case DECREMENT: {
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

    case CLEAR_CART: {
      return []
    }
  }
}

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => dispatch({
    type: ADD_TO_CART,
    payload: product
  })

  const removeFromCart = (productId) => dispatch({
    type: REMOVE_FROM_CART,
    payload: productId
  })

  const decrementQuantity = (productId) => dispatch({
    type: DECREMENT,
    payload: productId
  })

  const clearCart = () => dispatch({ type: CLEAR_CART })

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
