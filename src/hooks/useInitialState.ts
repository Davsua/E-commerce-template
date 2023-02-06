import { useState } from 'react'


export interface ShoppingState {
    isOpen: boolean,
    cart: [],

}
const INITIAL_STATE: ShoppingState = {
    isOpen: false,
    cart:[]
}
const useInitialState =() =>{

 const [state, setState] = useState(INITIAL_STATE)

 const addProduct = () =>{
    setState({
      ...state,
    })
 }
 return{
    state,
    addProduct
 }

}


export default useInitialState