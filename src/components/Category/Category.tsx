import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext/ProductContext'
import { StyledListCategory, StyledListItemTextCategory  } from './styles'
import { ListItemButton } from '@mui/material'

export const Category = () => {
  const {products} = useContext(ProductContext)
  const filterCategories = new Set(products.map( info => info.category))
  const filterNoDuplicate = [...filterCategories] 
  // 

  return (
    <StyledListCategory >
      {
        filterNoDuplicate.map( product =>(
          <ListItemButton component="a" href={`/${product}`} key={product}>
            <StyledListItemTextCategory primary={product} />
          </ListItemButton>

        ))
      }
    </StyledListCategory>

  )
}
