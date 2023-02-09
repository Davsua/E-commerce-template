import { createContext } from 'react';
import { Product } from '../../interfaces';

export interface ProductContextProps {
    products: Product[]
}

export const ProductContext =  createContext( {} as Product)