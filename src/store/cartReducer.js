
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartSlice',
    initialState:{showCart:false},
    reducers:{
        showCart(state){
            state.showCart=!state.showCart
        }
    }
})

export default cartSlice.reducer
export const showCartActions=cartSlice.actions