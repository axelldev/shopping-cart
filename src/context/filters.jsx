import { createContext, useState } from 'react'

export const FiltersContext = createContext()

const initialState = {
  minPrice: 0,
  category: 'all'
}

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(initialState)
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}
