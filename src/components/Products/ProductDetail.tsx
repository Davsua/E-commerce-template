import { useContext } from 'react'
//import { styled } from "@mui/material/styles";
//import Grid from "@mui/material/Grid";
//import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography'
//import ButtonBase from "@mui/material/ButtonBase";
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductsContext/ProductContext'

import styles from './ProductDetail.module.css'
import { RecomendedBySelected } from './RecomendedBySelected'
import { Button } from '@mui/material'
import Favorite from '@mui/icons-material/FavoriteBorder'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Facebook from '@mui/icons-material/Facebook'
import { ShoppingContext } from '../../context/Shopping/ShoppingContext'

/*const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});*/

type ProductId = {
  id: string
}

export const ProductDetail = () => {
  const { id } = useParams<ProductId>()
  const { products } = useContext(ProductContext)
  const { addProduct } = useContext(ShoppingContext)

  const productSelected = products.find(
    (product) => product.id.toString() === id
  )! //  '!' -> it means that always there are value, if we dont put it it can be undefined and we will have problems to pass it as prop

  console.log(productSelected)

  let discountPercentage =
    '%' + productSelected.discountPercentage.toString().split('.').shift()

  return (
    <>
      <div className={styles.root}>
        <div className={styles.detailsItem1}>
          <img
            src={productSelected?.thumbnail}
            alt={productSelected?.title}
            className={styles.image}
          />
        </div>

        <div className={styles.containerInfo}>
          <div className={`${styles.detailsItemInfo} ${styles.item}`}>
            <Typography sx={{ fontSize: '17px' }}>
              <b>{productSelected?.title}</b>
            </Typography>
            {/* TODO: convert rating to stars */}
            <Typography variant='subtitle1'>
              {productSelected?.rating} (#)
            </Typography>
          </div>

          <div className={`${styles.item} ${styles.descPrice}`}>
            <Typography variant='subtitle2'>
              {productSelected?.description}
            </Typography>
            {productSelected.discountPercentage ? (
              <div className={styles.discount}>
                <Typography variant='h6' className={`${styles.primaryColor}`}>
                  $. {productSelected?.price}
                </Typography>

                <p
                  style={{
                    color: 'green',
                    fontSize: '13px',
                    marginLeft: '8px',
                  }}
                >
                  {discountPercentage}
                </p>
              </div>
            ) : (
              <Typography variant='h6' className={`${styles.primaryColor}`}>
                $. {productSelected?.price}
              </Typography>
            )}
          </div>

          <div className={`${styles.item} ${styles.favoriteSession}`}>
            <Button
              variant='contained'
              sx={{
                fontSize: '11px',
                alignItems: 'center',
                marginRight: '8px',
              }}
              onClick={() => addProduct(productSelected)}
            >
              Add to cart
            </Button>
            <Favorite />
          </div>

          <div>
            <Typography
              variant='subtitle2'
              sx={{ color: 'gray', marginTop: '15px' }}
              className={styles.item}
            >
              <b>Categories: </b> {productSelected.category}
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ color: 'gray', marginTop: '15px' }}
              className={`${styles.item} ${styles.shareSession}`}
            >
              <b>Share: </b>{' '}
              <LinkedIn className={styles.icons} sx={{ color: '#1f1fffe8' }} />{' '}
              <Facebook className={styles.icons} sx={{ color: '#0000ffd6' }} />
            </Typography>
          </div>
        </div>
      </div>
      <RecomendedBySelected product={productSelected} />
    </>
  )
}

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
