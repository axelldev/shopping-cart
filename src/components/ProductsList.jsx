import { Product } from './Product'

export function ProductsList ({ products }) {
  return (
    <ul className='products-list'>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
        />
      ))}
    </ul>
  )
}
