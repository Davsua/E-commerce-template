import { useContext } from 'react'

import { Grid } from '@mui/material'

import { ProductCard } from './ProductCard'
import { ProductContext } from '../../context/ProductsContext/ProductContext'

export const Products = () => {
  const { products } = useContext(ProductContext)

  return (
    <Grid
      container
      style={{ padding: '25px' }}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      margin="auto"
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Grid>
  )
}
