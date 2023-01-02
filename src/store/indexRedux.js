import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import cartArrReducer from "./cartArrReducer";
import uiReducer from "./uiSlice";

const store =configureStore({
    reducer:{cart:cartReducer,cartArr:cartArrReducer,notify:uiReducer}
})

export default store