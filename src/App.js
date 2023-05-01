import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import NewCatalog from "./pages/NewCatalog";
import NewProduct from "./pages/NewProduct";
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
          <Route path="/new-catalog" element={<NewCatalog />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/edit-catalog/:id" element={<EditCatalog />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/catalog/:id" element={<Catalog />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
