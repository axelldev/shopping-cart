import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)
  const onFiltersChange = ({ target }) => {
    setFilters({
      ...filters,
      [target.name]: target.value
    })
  }

  const filterProducts = ({ products }) => products.filter((product) => {
    return product.price >= filters.minPrice && (
      filters.category === 'all' ||
      product.category === filters.category
    )
  })

  return { filters, filterProducts, onFiltersChange }
}
