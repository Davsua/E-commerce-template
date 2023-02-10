/*import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";*/
// import Grid from "@mui/material/Grid";
import { FC, useContext } from "react";
import { Product } from "../../interfaces";

// import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductsContext/ProductContext";

interface Props {
  product: Product;
}

export const RecomendedBySelected: FC<Props> = ({ product }) => {
  const { products } = useContext(ProductContext);
  //let product = products[0];
  let categorieRecommended = products.filter(
    (productCat) =>
      productCat.category === product.category && productCat.id !== product.id
  );
  return (
    <>
      {/* testing recommended side*/}
      <h1>Recommended</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {categorieRecommended.map((productRec) => (
          <div key={productRec.id} style={{ margin: "20px" }}>
            <p>{productRec.title}</p>
            <img
              src={productRec.thumbnail}
              alt={productRec.title}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
