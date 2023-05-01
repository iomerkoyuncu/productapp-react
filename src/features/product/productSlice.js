import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  productsInCatalog: [],
  product: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await productService.createProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get all products
export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productService.getAllProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get product by id
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await productService.getProductById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await productService.updateProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await productService.deleteProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get products by catalog id
export const getProductsByCatalogId = createAsyncThunk(
  "product/getProductsByCatalogId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await productService.getProductsByCatalogId(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = payload;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = payload;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(getProductsByCatalogId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCatalogId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productsInCatalog = payload;
      })
      .addCase(getProductsByCatalogId.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
  }
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;