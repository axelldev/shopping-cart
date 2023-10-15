import { useState } from 'react'
import { CartIcon, CartCheckIcon, RemoveCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Product ({ id, title, image, category, price }) {
  const [hover, setHover] = useState(false)
  const { addToCart, removeFromCart, existsInTheCart } = useCart()
  const isInTheCart = existsInTheCart({ productId: id })

  const handleClick = () => {
    if (isInTheCart) {
      removeFromCart(id)
      return
    }
    addToCart({ id, title, image, price })
  }

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <li className='product-list-item'>
      <img src={image} alt={`${title} image`} />
      <div className='product-info'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>${price}</p>
        <cite className='product-category'>{ category }</cite>
      </div>
      <div className='product-actions'>
        <button
          className={`cart-button ${isInTheCart ? 'in-the-cart' : ''}`}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
            !isInTheCart && <CartIcon />
          }
          {
            !hover && isInTheCart && <CartCheckIcon />
          }
          {
            hover && isInTheCart && <RemoveCartIcon />
          }
        </button>
      </div>
    </li>
  )
}
