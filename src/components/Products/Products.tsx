import { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { productsApi } from "../../api";
import { Product, RootObject } from "../../interfaces";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productsApi
      .get<RootObject>("/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  //console.log(products);

  return (
    <Grid
      container
      spacing={2}
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
