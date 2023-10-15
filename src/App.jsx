import { useFilters } from './hooks/useFilters'
import { useProducts } from './hooks/useProducts'
import { Title } from './components/Title'
import { ProductsSection } from './components/ProductsSection'
import { ErrorMessage } from './components/ErrorMessage'
import { Loader } from './components/utils/Loader'
import './styles/App.css'
import { Cart } from './components/Cart'

export default function App () {
  const { products, error, loading } = useProducts()
  const { filterProducts } = useFilters()

  return (
    <>
      <Cart />
      <Title>Shopping Cart 🛒</Title>
      {error && <ErrorMessage message={error} />}
      <main>
        {loading
          ? (
            <div style={{
              textAlign: 'center'
            }}>
              <Loader />
            </div>
            )
          : (
            <ProductsSection
              products={filterProducts({ products })}
            />
            )
        }
      </main>
    </>
  )
}
