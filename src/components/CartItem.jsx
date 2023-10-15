import { useCart } from '../hooks/useCart'

export function CartItem ({ id, title, image, price, quantity }) {
  const { addToCart, decrementQuantity } = useCart()

  return (
    <li className='cart-item'>
      <img className='cart-item-image' src={image}/>
      <p className='cart-item-title'>{title}</p>
      <span className='cart-item-price'>${price}</span>
      <div className='cart-item-actions'>
        <button onClick={() => decrementQuantity(id)}> - </button>
        <span className='cart-item-quantity'>
          Qty: {quantity}
        </span>
        <button onClick={() => addToCart({ id, title, image, price, quantity })}> + </button>
      </div>
    </li>
  )
}
