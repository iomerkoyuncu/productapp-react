import axios from "axios";

const API_URL = "https://localhost:7137/api/Product"

// Create new product
export const createProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response;
};

// Get all products
export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response;
};

// Get product by id
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response;
};

// Update product
export const updateProduct = async (product) => {
  const response = await axios.put(`${API_URL}/${product.id}`, product);
  return response;
};

// Delete product
export const deleteProduct = async (product) => {
  const response = await axios.delete(`${API_URL}/${product.id}`, { data: product });
  return response;
};

// Get products by catalog id
export const getProductsByCatalogId = async (id) => {
  const response = await axios.get(`${API_URL}/catalog/${id}`);
  return response;
};

const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCatalogId,
};

export default productService;