import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Product from "./pages/Product";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import EditProduct from "./pages/EditProduct";

import EditCatalog from "./pages/EditCatalog";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-catalog" element={<EditCatalog />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
