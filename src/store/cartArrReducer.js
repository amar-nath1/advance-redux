
import { createSlice } from "@reduxjs/toolkit";

const cartArrSlice=createSlice({
    name:'cartArray',
    initialState:{cartArr:[]},
    reducers:{

        updateCart(state,action){
            const exiItemIndx=state.cartArr.findIndex((item)=>item.id===action.payload.id)
            if (exiItemIndx===-1){
                state.cartArr.push({...action.payload,qty:1})
                
            }
            else{

                const intQty=state.cartArr[exiItemIndx].qty
                const finalQty=intQty+1
                state.cartArr[exiItemIndx].qty=finalQty
                
            }
        },
        reduceCart(state,action){
            const exiItemIndx=state.cartArr.findIndex((item)=>item.id===action.payload.id)
            const intQty=state.cartArr[exiItemIndx].qty
            
            const finalQty=intQty-1

            if (finalQty>0){
                state.cartArr[exiItemIndx].qty=finalQty
            }
            else{
                state.cartArr.splice(exiItemIndx,1)
            }

        }
    }
})

export default cartArrSlice.reducer
export const cartArrActions=cartArrSlice.actions