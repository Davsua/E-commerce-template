import { createContext } from 'react'
import { Product } from '../../interfaces'

export interface ShoppingContextProps {
    state:{    
        isOpenOrder: boolean,
        cart: Product[],
    }
    addProduct: (payload: Product) => void,
    deleteProduct: (payload: Product) => void,
    toogleOrder: () => void,
    
}

export const ShoppingContext = createContext({} as ShoppingContextProps)