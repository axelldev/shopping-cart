export const PRODUCTS_BASE_URL = 'https://fakestoreapi.com/products/'

export async function fetchProducts () {
  try {
    const response = await fetch(PRODUCTS_BASE_URL)
    return await response.json()
  } catch {
    throw new Error('Error fetching products')
  }
}
