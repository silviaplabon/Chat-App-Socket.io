import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   username: "",
   userroom: ''
}
const UserRoomReducer = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateRoomUserInfo(state,action){
         state.username = action.payload.username;
         state.userroom = action.payload.userroom;
      },
      updateRoomReceiverInfo(state,action){
         state.receiver = action.payload.receiver;
         state.image = action.payload.image
      }
   },
   extraReducers: {
   }
})
export const { updateRoomUserInfo,updateRoomReceiverInfo } = UserRoomReducer.actions
export default UserRoomReducer.reducer;