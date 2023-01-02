import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'notification',
    initialState:{notify:false,notificationMsg:'Sending'},
    reducers:{

        showNotification(state,action){
            state.notify=action.payload
        },

        notificationMsg(state,action){
            state.notificationMsg=action.payload
        }

    }
})

export default uiSlice.reducer
export const notifyActions=uiSlice.actions