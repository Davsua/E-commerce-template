import { Stack } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage, ProductDetail, Search } from "./components/index";

function App() {
  return (
    <Stack>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
