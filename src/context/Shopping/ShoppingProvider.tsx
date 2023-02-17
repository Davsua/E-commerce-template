import useInitialState from '../../hooks/useInitialState';
import { ShoppingContext } from './ShoppingContext';


interface ShoppingProviderProps {
    children: JSX.Element | JSX.Element[] 
}


export const ShoppingProvider = ({children} : ShoppingProviderProps) =>{
  const initialState = useInitialState();

  return(
    <ShoppingContext.Provider value={initialState}>
      {children}
    </ShoppingContext.Provider>
  );
};