import { createContext } from 'react';
import { Product } from '../../interfaces';

export interface ShoppingContextProps {
    
        isOpenOrder: boolean,
        cart: Product[],
        addCart: (item: Product) => void
    // addProduct: (payload: Product) => void,
    // deleteProduct: (payload: Product) => void,
    // toogleOrder: () => void,
    
}

export const ShoppingContext = createContext({} as ShoppingContextProps)