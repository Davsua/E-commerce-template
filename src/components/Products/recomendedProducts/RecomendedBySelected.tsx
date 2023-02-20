import { FC, useContext } from 'react';
import { Product } from '../../../interfaces';

import { ProductContext } from '../../../context/ProductsContext/ProductContext';
import { RecomendedCard } from './RecomendedCard';
import { Box } from '@mui/material';

interface Props {
  product: Product;
}

export const RecomendedBySelected: FC<Props> = ({ product }) => {
  const { products } = useContext(ProductContext);
  //let product = products[0];
  const categorieRecommended = products.filter(
    (productCat) =>
      productCat.category === product.category && productCat.id !== product.id
  );
  return (
    <>
      <Box>
        {/* testing recommended side*/}
        <h1 style={{ marginLeft: '16px' }} key={product?.category}>
          Recomended
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {categorieRecommended.map((productRec) => (
            <RecomendedCard product={productRec} key={productRec.id} />
          ))}
        </div>
      </Box>
    </>
  );
};
