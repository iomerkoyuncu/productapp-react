import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import catalogService from "./catalogService";

const initialState = {
  catalogs: [],
  catalog: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new catalog
export const createCatalog = createAsyncThunk(
  "catalog/createCatalog",
  async (catalog, thunkAPI) => {
    try {
      return await catalogService.createCatalog(catalog);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string()

      return thunkAPI.rejectWithValue(message)
    }
  }
);

// Get all catalogs
export const getAllCatalogs = createAsyncThunk(
  "catalog/getAllCatalogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogService.getAllCatalogs();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get catalog by id
export const getCatalogById = createAsyncThunk(
  "catalog/getCatalogById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogService.getCatalogById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update catalog
export const updateCatalog = createAsyncThunk(
  "catalog/updateCatalog",
  async (catalog, { rejectWithValue }) => {
    try {
      const response = await catalogService.updateCatalog(catalog);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete catalog
export const deleteCatalog = createAsyncThunk(
  "catalog/deleteCatalog",
  async (catalog, { rejectWithValue }) => {
    try {
      const response = await catalogService.deleteCatalog(catalog);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCatalog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(getAllCatalogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCatalogs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.catalogs = payload;
      })
      .addCase(getAllCatalogs.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(getCatalogById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCatalogById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.catalog = payload;
      })
      .addCase(getCatalogById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(updateCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.catalog = payload;
      })
      .addCase(updateCatalog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(deleteCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteCatalog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
      })
  }
});

export const { reset } = catalogSlice.actions;
export default catalogSlice.reducer;
