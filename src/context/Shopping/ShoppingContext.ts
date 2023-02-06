import { createContext } from 'react';

export interface ShoppingContextProps {
    state:{    
        isOpen: boolean,
        cart: [],
    }
    addProduct: () => void
    
}

export const ShoppingContext = createContext({} as ShoppingContextProps)