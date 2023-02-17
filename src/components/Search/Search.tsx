/* eslint-disable indent */
import Input from '@mui/material/Input';
import { ChangeEvent, useContext, useRef, useState } from 'react';
import { ProductContext } from '../../context/ProductsContext/ProductContext';
import { SearchResult } from '../SearchResult/SearchResult';

export const Search = () => {
  const { products } = useContext(ProductContext);
  const debounceRef = useRef<NodeJS.Timeout>();
  const [input, setInput] = useState('');

  const filtrillo = !input
    ? []
    : products.filter((dato) =>
        dato.title.toLowerCase().includes(input.toLocaleLowerCase())
      );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setInput(event.target.value);
    }, 500);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Input onChange={handleSearch} placeholder='Search your product ...' />
        {filtrillo.length > 0 ? <SearchResult products={filtrillo} /> : ''}
      </div>
    </>
  );
};
