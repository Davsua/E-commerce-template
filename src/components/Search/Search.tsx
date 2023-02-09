import  Input  from '@mui/material/Input';
import { ChangeEvent, useRef, useState } from 'react';

export const Search = () => {

const debounceRef = useRef<NodeJS.Timeout>()
const [input, setInput] = useState('')

const handleSearch = (event : ChangeEvent<HTMLInputElement>) =>{
  if(debounceRef.current) clearTimeout(debounceRef.current)
  debounceRef.current = setTimeout(() =>{
    setInput(event.target.value)
  }, 400)
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
};
