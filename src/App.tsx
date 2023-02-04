import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
