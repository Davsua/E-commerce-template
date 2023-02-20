import { useContext } from 'react';

import { Grid } from '@mui/material';

import { ProductContext } from '../../context/ProductsContext/ProductContext';
import { ProductCard } from '../Products/ProductCard';
import { useParams } from 'react-router-dom';

export const CategoryDetail = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();
  const filterCategoryDetail = products.filter(
    (product) => product.category === category
  );
  return (
    <>
      <h1>{window.location.pathname}</h1>
      <Grid
        container
        spacing={2}
        style={{ padding: '30px' }}
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
      >
        {filterCategoryDetail.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
};
