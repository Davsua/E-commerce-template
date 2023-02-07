import { useEffect, useState } from "react";
import { productsApi } from "../../api";
import { RootObject } from "../../interfaces";

export const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    productsApi
      .get<RootObject>("/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  console.log(products);

  return (
    <>
      {products.map((product, i) => (
        <p key={i}>{product.title}</p>
      ))}
    </>
  );
};
