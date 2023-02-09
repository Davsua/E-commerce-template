import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useParams } from "react-router-dom";
import { productsApi } from "../../api";
import { Product, RootObject } from "../../interfaces";
import { Box, Button, makeStyles } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

type ProductId = {
  id: string;
};

/*const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  image: {
    width: "100%",
  },
}));*/

export const ProductDetail = () => {
  const { id } = useParams<ProductId>();

  const [productsState, setProductsState] = useState<Product[]>([]);

  useEffect(() => {
    productsApi
      .get<RootObject>("/products")
      .then((res) => setProductsState(res.data.products));
  }, []);

  const productSelected = productsState.find(
    (product) => product.id.toString() === id
  );

  // console.log(productSelected?.title);
  //const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <img src={productSelected?.thumbnail} alt={productSelected?.title} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">{productSelected?.title}</Typography>
        <Typography variant="subtitle1">{productSelected?.price}</Typography>
        <Typography variant="subtitle2">{productSelected?.category}</Typography>
      </Grid>
    </Grid>
  );
};

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
