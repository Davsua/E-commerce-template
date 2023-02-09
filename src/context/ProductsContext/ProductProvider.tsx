import { useEffect } from 'react';
import { ProductContext } from './ProductContext'
import { productsApi } from '../../api';
import { Product, RootObject } from '../../interfaces';

export interface ProductProviderState{
    products: Product[]
} 
interface ProductProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE :ProductProviderState = {
    products: []
}



export const ProductProvider = ({children} : ProductProviderProps) => {
    useEffect(() => {
        productsApi
          .get<RootObject>("/products")
          .then((res) => console.log(res.data.products));
      }, []);
  return (
    <ProductContext.Provider value={INITIAL_STATE}>{children}</ProductContext.Provider>
  )
}
