import { Link } from 'react-router-dom'
import { Product } from '../../interfaces'
import {ListItem, ListItemText, CardMedia } from '@mui/material'
import { StyledSearchResult } from './styles'

interface SearchResultProps{
    products: Product[]
}

export const SearchResult = ({products}:SearchResultProps) => {
  return (
    <StyledSearchResult>
      <ul>
        {products.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <ListItem >
              <CardMedia
                component="img"
                image={item.images[0]}
                title={item.title}
              />
              <ListItemText style={{color: '#000'}} primary={`${item.title}`} />            
              <ListItemText style={{color: '#000'}} primary={`${item.price}`} />            
              <ListItemText style={{color: '#000'}} primary={`${item.discountPercentage}`} />            
           
            </ListItem>
          </Link>
        ))}
      </ul>
   
    </StyledSearchResult>

  )
}
