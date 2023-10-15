import { OpenCartButton } from './OpenCartButton'
import { CartItem } from './CartItem'
import '../styles/Cart.css'
import { useCart } from '../hooks/useCart'

export function Cart () {
  const { cart, clearCart } = useCart()

  return (
    <>
      <OpenCartButton />
      <aside className='cart'>
          <ul className='cart-list'>
            {
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))
            }
          </ul>
          <button className='btn-clear-cart' onClick={clearCart}>CLEAR CART</button>
      </aside>
    </>
  )
}
