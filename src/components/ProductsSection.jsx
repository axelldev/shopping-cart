import { ProductFilters } from './ProductFilters'
import { ProductsList } from './ProductsList'

export function ProductsSection ({ products }) {
  return (
    <section className='products-container'>
      <ProductFilters />
      <ProductsList products={products} />
    </section>
  )
}
