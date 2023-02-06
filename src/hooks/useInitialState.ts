import { useState } from 'react'
import { Product } from '../interfaces'


export interface ShoppingState {
  isOpenOrder: boolean,
    cart: Product[],

}
const INITIAL_STATE: ShoppingState = {
    isOpenOrder: false,
    cart: []
}
const useInitialState =() =>{

 const [state, setState] = useState(INITIAL_STATE)

 const addProduct = (payload: Product) =>{
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload]
    })
 }
 const deleteProduct = (payload: Product) =>{
  setState({
    ...state,
    cart: state.cart.filter(( items => items.id !== payload.id)) 
  })
}

 const toogleOrder = () =>{
  setState({
    ...state,
    isOpenOrder: !state.isOpenOrder,
  })

 }

 return{
    state,
    addProduct,
    deleteProduct,
    toogleOrder
 }

}


export default useInitialState