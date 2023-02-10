import { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { useParams } from 'react-router-dom'
import { productsApi } from '../../api'
import { Product, RootObject } from '../../interfaces'
import { ProductContext } from '../../context/ProductsContext/ProductContext'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

type ProductId = {
  id: string;
};

export const ProductDetail = () => {
  const { id } = useParams<ProductId>()
  const {products} = useContext(ProductContext)
 
  // const [productsState, setProductsState] = useState<Product[]>([]);

  // useEffect(() => {
  //   productsApi
  //     .get<RootObject>("/products")
  //     .then((res) => setProductsState(res.data.products));
  // }, []);

  const productSelected = products.find(
    (product) => product.id.toString() === id
  )

  // console.log(productSelected?.title);

  return (
    <div>
      <Grid
        container
        spacing={2}
        xs={8}
        sm={8}
        md={8}
        xl={8}
        style={{
          display: 'flex',
          border: '2px red solid',
          padding: 10,
          margin: '10px',
        }}
        sx={{ justifyContent: 'center' }}
      >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt={productSelected?.title}
              src={productSelected?.thumbnail}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {productSelected?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productSelected?.rating}
                {/* To do: convert to stars*/}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {productSelected?.price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

{
  /*<Paper
      elevation={8}
      sx={{
        p: 5,
        margin: "auto",
        width: "50%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >*/
}
