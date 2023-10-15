import { useState, useEffect } from 'react'
import { fetchProducts } from '../services/products'

export function useProducts () {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getProducts = () => {
    setLoading(true)
    setError(null)
    fetchProducts()
      .then((products) => {
        setProducts(products)
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }

  useEffect(getProducts, [])

  return { products, error, loading, getProducts }
}
