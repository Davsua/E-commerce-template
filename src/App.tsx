import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage, Navbar, ProductDetail, Search } from './components/index'
import { Box } from '@mui/material'
import { CategoryDetail } from './components/CategoryDetail/CategoryDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/" element={<Search />} />
        <Route path="/:category" element={<CategoryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
