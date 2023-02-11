import { createTheme } from '@mui/material'
import { ThemeOptions } from './interfaces/stylesInterface'

export const theme:ThemeOptions = createTheme({
  breakpoints:{
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#0971f1',
    },
  }
})