import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../features/product/productSlice"
import catalogReducer from "../features/catalog/catalogSlice"


export const store = configureStore({
  reducer: {
    product: productReducer,
    catalog: catalogReducer,
  },
})
