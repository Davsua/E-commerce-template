import  Input  from '@mui/material/Input'
import { ChangeEvent, useContext, useRef, useState } from 'react'
import { ProductContext } from '../../context/ProductsContext/ProductContext'

export const Search = () => {
  const {products} = useContext(ProductContext)
  const debounceRef = useRef<NodeJS.Timeout>()
  const [input, setInput] = useState('')

  const filtrillo =  !input ? products : products.filter((dato) => dato.title.toLowerCase().includes(input.toLocaleLowerCase()))

  const handleSearch = (event : ChangeEvent<HTMLInputElement>) =>{
    if(debounceRef.current) clearTimeout(debounceRef.current)
  
    debounceRef.current = setTimeout(() =>{
      setInput(event.target.value)
    }, 500)
  }

  return (
    <>
      {
        console.log(input)
      }
      <Input 
        onChange={handleSearch}
        placeholder='Search your product ...'/>
    </>
  )
}
