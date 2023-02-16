import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../interfaces';
import styles from './RecomendedProduct.module.css';
import { ShoppingContext } from '../../../context/Shopping/ShoppingContext';

interface Props {
  product: Product;
}

export const RecomendedCard: FC<Props> = ({ product }) => {
  const { addProduct } = useContext(ShoppingContext);

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={2.4}
      xl={2}
      sx={{
        padding: '10px',
        width: '300px',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Card
        sx={{ maxWidth: 300 }}
        style={{
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '#b5b5b5',
        }}
      >
        <Link
          to={`/details/${product.id}`}
          style={{ textDecoration: 'none', color: 'Black' }}
        >
          <CardActionArea>
            <CardMedia
              style={{ objectFit: 'fill' }}
              sx={{ height: 155 }}
              component='img'
              image={product.images[0]}
              title={product.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='body1'
                component='div'
                sx={{ minHeight: 50 }}
              >
                {product.title}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body2' color='text.secondary'>
                  {product.category}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  ${product.price}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            variant='contained'
            sx={{
              fontSize: '11px',
              alignItems: 'center',
              margin: 'auto',
            }}
            onClick={() => addProduct(product)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
