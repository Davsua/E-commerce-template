import { useContext, useEffect, useState } from 'react'

import { Grid } from '@mui/material'

import { productsApi } from '../../api'
import { Product, RootObject } from '../../interfaces'
import { ProductCard } from './ProductCard'
import { ProductContext } from '../../context/ProductsContext/ProductContext'

export const Products = () => {
  const {products} = useContext(ProductContext)
  // const [productsState, setProductsState] = useState<Product[]>([]);

  // useEffect(() => {
  //   productsApi
  //     .get<RootObject>("/products")
  //     .then((res) => setProductsState(res.data.products));
  // }, []);

  //console.log(products);

  return (
    <Grid
      container
      spacing={2}
      style={{ padding: '30px' }}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </Grid>
  )
}
