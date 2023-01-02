import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import cartArrReducer from "./cartArrReducer";

const store =configureStore({

    reducer:{cart:cartReducer,cartArr:cartArrReducer}
})

export default store