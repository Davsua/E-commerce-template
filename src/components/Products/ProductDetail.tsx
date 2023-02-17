import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductContext } from '../../context/ProductsContext/ProductContext';
import { RecomendedBySelected } from './recomendedProducts/RecomendedBySelected';
import { ProductView } from './ProductView';

type ProductId = {
  id: string;
};

export const ProductDetail = () => {
  const { id } = useParams<ProductId>();
  const { products } = useContext(ProductContext);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const productSelected = products.find(
    (product) => product.id.toString() === id
  )!; //  '!' -> it means that always there are value, if we dont put it it can be undefined and we will have problems to pass it as prop

  //console.log(productSelected);
  console.log(productSelected);

  /*const discountPercentage =
    '%' + productSelected.discountPercentage.toString().split('.').shift();*/

  return (
    <>
      <ProductView product={productSelected} />
      <RecomendedBySelected product={productSelected} />
    </>
  );
};

/* <div
        container
        sx={{ width: "100%", margin: "auto" }}
        className={styles.root}
      >
        <Grid item xs={12} md={6} className={styles.detailsItem1}>
          <img
            src={productSelected?.thumbnail}
            alt={productSelected?.title}
            className={styles.image}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginTop: "10px" }}
          className={`${styles.detailsItemInfo} ${styles.item}`}
        >
          <Typography sx={{ fontSize: "17px" }}>
            {productSelected?.title}
          </Typography>
          {/* TODO: convert rating to stars */ //}
/*<Typography variant="subtitle1">{productSelected?.rating}</Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: "10px",
          }}
          className={`${styles.item} ${styles.descPrice}`}
        >
          <Typography variant="subtitle2">
            {productSelected?.description}
          </Typography>
          <Typography variant="h6" className={`${styles.primaryColor}`}>
            $. {productSelected?.price}
          </Typography>
        </Grid>
      </div> */
