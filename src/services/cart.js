export function getCartItems () {
  const cartData = JSON.parse(window.localStorage.getItem('cart'))
  if (!cartData) return []
  return cartData
}

export function saveCart ({ cart }) {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}
