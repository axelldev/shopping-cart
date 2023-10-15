import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function ProductFilters () {
  const { filters, onFiltersChange } = useFilters()
  const minPriceInputId = useId()
  const categoryInputId = useId()

  return (
    <section className='product-filters'>
      <div>
        <label
          htmlFor={minPriceInputId}
        >
          Min Price: ${filters.minPrice}
        </label>
        <input
          name='minPrice'
          id={minPriceInputId} type='range'
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={onFiltersChange}
        />
      </div>

      <div>
        <label htmlFor={categoryInputId}>
          Category:
        </label>
        <select name='category' value={filters.category} onChange={onFiltersChange}>
          <option value='all'>All</option>
          <option value="men's clothing">
            Men&apos;s Clothing
          </option>
          <option value="women's clothing">
            Women&apos;s Clothing
          </option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
        </select>
      </div>
    </section>
  )
}
