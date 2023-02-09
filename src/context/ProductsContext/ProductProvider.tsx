import { useEffect } from 'react';
import { ProductContext } from './ProductContext'
import { productsApi } from '../../api';
import {  RootObject } from '../../interfaces';


interface ProductProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE :RootObject = {
    products: [],
    skip: 0,
    total: 0,
    limit: 0
}



export const ProductProvider = ({children} : ProductProviderProps) => {
    useEffect(() => {
        productsApi
          .get<RootObject>("/products")
          .then((res) => {
            INITIAL_STATE.products = res.data.products
        })
      }, []);
  return (
    <ProductContext.Provider value={INITIAL_STATE}>{children}</ProductContext.Provider>
  )
}
