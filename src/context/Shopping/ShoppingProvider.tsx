import { ShoppingContext } from './ShoppingContext'

export interface ShoppingState {
    isOpen: Boolean,
    cart: []

}
interface ShoppingProviderProps {
    children: JSX.Element | JSX.Element[] 
}
const INITIAL_STATE: ShoppingState = {
    isOpen: false,
    cart:[]
}

export const ShoppingProvider = ({children} : ShoppingProviderProps) =>{


    return(
        <ShoppingContext.Provider value={INITIAL_STATE}>
            {children}
        </ShoppingContext.Provider>
    )
}