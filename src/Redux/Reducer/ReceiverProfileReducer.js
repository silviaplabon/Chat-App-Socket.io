import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   receiver:'A',
   image:'http://cdn.onlinewebfonts.com/svg/img_121767.png',
   status:'offline'
}
const ReceiverProfileReducer = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateRoomReceiverInfo(state,action){
         state.receiver = action.payload.receiver;
         state.image = action.payload.image;
         state.status=action.payload.status
      },
      updateRoomReceiverStatus(state, action) {
         state.status = action.payload
     },
      
   },
   extraReducers: {
   }
})
export const { updateRoomReceiverInfo,updateRoomReceiverStatus} = ReceiverProfileReducer.actions
export default ReceiverProfileReducer.reducer;