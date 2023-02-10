import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import { productsApi } from '../../api'
import {  Product, ProductState, RootObject } from '../../interfaces'


interface ProductProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE :ProductState = {
  products: [],
  skip: 0,
  total: 0,
  limit: 0
}



export const ProductProvider = ({children} : ProductProviderProps) => {
  const  [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    productsApi
      .get<RootObject>('/products')
      .then((res => setState(res.data)))
  }, [])
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  )
}
