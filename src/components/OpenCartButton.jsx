import { useId } from 'react'
import { CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function OpenCartButton () {
  const { totalItems } = useCart()
  const cartCheckboxId = useId()
  return (
  <>
    <label htmlFor={cartCheckboxId} className='open-cart-button'>
      <CartIcon />
      <span className='cart-count'>{totalItems}</span>
    </label>
    <input id={cartCheckboxId} type="checkbox" hidden/>
  </>
  )
}
