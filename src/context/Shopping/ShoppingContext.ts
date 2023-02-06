import { createContext } from 'react';

export interface ShoppingContextProps {
    isOpen: Boolean,
    cart: []
}

export const ShoppingContext = createContext({} as ShoppingContextProps)