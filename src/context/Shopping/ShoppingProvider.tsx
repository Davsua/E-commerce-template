import { useReducer } from 'react'
import { Product } from '../../interfaces'
import { ShoppingContext } from './ShoppingContext'
import { ShoppingReducer } from './ShoppingReducer'


interface ShoppingProviderProps {
    children: JSX.Element | JSX.Element[] 
}
export interface ShoppingState{
    cart: Product[],
    isOpenOrder: boolean,
}
const INITIAL_STATE:ShoppingState = {
    cart:[],
    isOpenOrder: false
}

export const ShoppingProvider = ({children} : ShoppingProviderProps) =>{
    const [state, dispatch] = useReducer( ShoppingReducer, INITIAL_STATE)
 console.log(state)

const addCart = (item : Product) =>{
    dispatch({type: 'addToCart', payload: item})

}


    return(
        <ShoppingContext.Provider value={{...state,
            addCart
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}