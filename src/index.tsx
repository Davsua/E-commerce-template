import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { ShoppingProvider } from './context/Shopping/ShoppingProvider'
import { ProductProvider } from './context/ProductsContext/ProductProvider'
import { theme } from './theme'
import { Experimental_CssVarsProvider  as CssVarsProvider} from '@mui/material'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <CssVarsProvider  theme={theme}>
      <ProductProvider>     
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </ProductProvider>
    </CssVarsProvider >
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
