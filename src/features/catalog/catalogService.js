import axios from "axios";

const API_URL = "https://localhost:7137/api/Catalog"

// Create new catalog
export const createCatalog = async (catalog) => {
  const response = await axios.post(API_URL, catalog);
  return response;
}

// Get all catalogs
export const getAllCatalogs = async () => {
  const response = await axios.get(API_URL);
  return response;
}

// Get catalog by id
export const getCatalogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response;
}

// Update catalog
export const updateCatalog = async (catalog) => {
  const response = await axios.put(`${API_URL}/${catalog.id}`, catalog);
  return response;
}

// Delete catalog
export const deleteCatalog = async (catalog) => {
  const response = await axios.delete(`${API_URL}/${catalog.id}`, { data: catalog });
  return response;
}

const catalogService = {
  createCatalog,
  getAllCatalogs,
  getCatalogById,
  updateCatalog,
  deleteCatalog,
};

export default catalogService;
