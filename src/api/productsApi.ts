import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
})

export default productsApi
