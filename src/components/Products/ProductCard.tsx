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
import { FC } from "react";
import { Product } from "../../interfaces";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  //const [products, setProducts] = useState<any[]>([]);

  /*useEffect(() => {
    productsApi
      .get<RootObject>("/products")
      .then((res) => setProducts(res.data.products));
  }, []);*/

  return (
    <Grid item xs={12} sm={6} md={3} xl={1}>
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
            sx={{ maxHeight: 155 }}
            component="img"
            image={product.images[0]}
            title={product.title}
          />
          <CardContent style={{ height: 80 }}>
            <Typography gutterBottom variant="h6" component="div">
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
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
