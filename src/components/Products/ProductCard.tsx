import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC, useContext } from "react";
import { Product } from "../../interfaces";
import { ShoppingContext } from '../../context/Shopping/ShoppingContext';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const {addCart} = useContext(ShoppingContext)
  return (
    <Grid item xs={12} sm={4} md={2} xl={1}>
      <Card
        sx={{ height: 320 }}
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#b5b5b5",
        }}
      >
        <CardActionArea>
          <CardMedia
            style={{ objectFit: "fill" }}
            sx={{ height: 155 }}
            component="img"
            image={product.images[0]}
            title={product.title}
          />
          <CardContent style={{ height: 75 }}>
            <Typography gutterBottom variant="body1" component="div">
              {product.title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" color="text.secondary">
                {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </div>
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
          </CardActions>
        </CardActionArea>
            <Button sx={{ fontSize: "11px" }}>Learn More</Button>
            <Button sx={{ fontSize: "11px" }} onClick={()=> addCart(product)}>Add to cart</Button>
      </Card>
    </Grid>
  );
};
