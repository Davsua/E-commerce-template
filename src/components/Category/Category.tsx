import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext/ProductContext'
import { StyledListCategory, StyledListItemTextCategory  } from './styles'
import { Link } from 'react-router-dom'

export const Category = () => {
  const {products} = useContext(ProductContext)
  const filterCategories = new Set(products.map( info => info.category))
  const filterNoDuplicate = [...filterCategories] 
  // 

  return (
    <StyledListCategory >
      {
        filterNoDuplicate.map( category =>(
          <Link to={`/${category}`} key={category}>
            <StyledListItemTextCategory primary={category} />
          </Link>

        ))
      }
    </StyledListCategory>

  )
}
