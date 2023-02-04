import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { productsApi } from "../../api";
import { RootObject } from "../../interfaces";
import { ProductCard } from "./ProductCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    productsApi
      .get<RootObject>("/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  //console.log(products);

  return (
    <Grid
      container
      spacing={1}
      style={{ padding: 7 }}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Grid>
  );
};

/* <Grid
          container
          style={{ maxWidth: "100%" }}
          sx={{ width: "100%" }}
          direction="row"
          xs={6}
          sm={3}
          md={2}
          xl={1}
        >
          <Grid item xs={6} sm={3} md={2} xl={1}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Grid>
        </Grid>*/
