import { FC, MouseEvent, useContext, useState } from 'react';
import { Favorite, LinkedIn, Facebook } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import styles from './ProductDetail.module.css';
import { Product } from '../../interfaces/productInterfase';

import { ShoppingContext } from '../../context/Shopping/ShoppingContext';

interface Props {
  product: Product;
}

export const ProductView: FC<Props> = ({ product }) => {
  const { addProduct } = useContext(ShoppingContext);

  const discount =
    '%' + product?.discountPercentage.toString().split('.').shift();

  const [mainImg, setMainImg] = useState(product?.thumbnail);
  const [leftImgs, setLeftImgs] = useState([
    product?.images[0],
    product?.images[1],
    product?.images[2],
  ]);
  //console.log(typeof product.images);

  const handleClick = (event: MouseEvent<HTMLImageElement>) => {
    // tomo la url del elemento al que se le click
    const clickedImgSrc = event.currentTarget.src;
    //igualo variable a state
    const newLeftImgs = leftImgs; //[...leftImgs];
    // tomo el indice del elemento al que clickee
    /*const clickedImgIndex = newLeftImgs.indexOf(clickedImgSrc);*/
    // agrego la imagen grande (ppal) al array
    newLeftImgs.push(mainImg);
    /* setLeftImgs([
       ...newLeftImgs.slice(0, clickedImgIndex),
       ...newLeftImgs.slice(clickedImgIndex + 1),
       newLeftImgs[newLeftImgs.length - 1],
    // ]);*/

    //Elimino los repetidos
    setLeftImgs([...new Set(newLeftImgs)]);
    //console.log(leftImgs);

    setMainImg(clickedImgSrc);
  };

  return (
    <div className={styles.root}>
      <div className={styles.detailsItem1} key={product?.category}>
        <div className={styles.leftColumn}>
          {/* tomo los ultimos tres elementos del array */}
          {leftImgs.slice(-3).map((imgSrc) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`Imagen ${imgSrc}`}
              onClick={handleClick}
            />
          ))}
        </div>
        <div className={styles.rightColumn}>
          <img src={mainImg} alt={product?.title} className={styles.image} />
        </div>
      </div>

      <div className={styles.containerInfo}>
        <div className={`${styles.detailsItemInfo} ${styles.item}`}>
          <Typography sx={{ fontSize: '17px' }}>
            <b>{product?.title}</b>
          </Typography>
          {/* TODO: convert rating to stars */}
          <Typography variant='subtitle1'>{product?.rating} (#)</Typography>
        </div>

        <div className={`${styles.item} ${styles.descPrice}`}>
          <Typography variant='subtitle2'>{product?.description}</Typography>
          {product?.discountPercentage ? (
            <div className={styles.discount}>
              <Typography variant='h6' className={`${styles.primaryColor}`}>
                $. {product?.price}
              </Typography>

              <p
                style={{
                  color: 'green',
                  fontSize: '13px',
                  marginLeft: '8px',
                }}
              >
                {discount}
              </p>
            </div>
          ) : (
            <Typography variant='h6' className={`${styles.primaryColor}`}>
              $. {product?.price}
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
            onClick={() => addProduct(product)}
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
            <b>Categories: </b> {product?.category}
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
  );
};
