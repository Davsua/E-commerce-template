import { Product } from '../../interfaces';
import { ShoppingState } from './ShoppingProvider';

type ShoppingAction = 
    |{type: 'addToCart' , payload:Product  }
    |{type: 'deleteItem' , payload:Product  }

    export const ShoppingReducer =(state: ShoppingState, action:ShoppingAction) :ShoppingState =>{
        switch (action.type) {
            case 'addToCart':
                return{
                    ...state,
                    isOpenOrder:false,
                    cart: [action.payload]
                }
                
        
            default:
                return state
                
        }


    }
   
