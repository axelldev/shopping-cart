import { useReducer } from 'react'
import { CART_ACTIONS } from '../reducers/actions'
import { cartReducer, cartInitialState } from '../reducers/actions/cart'

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

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

  return {
    state,
    addToCart,
    removeFromCart,
    decrementQuantity,
    clearCart
  }
}
