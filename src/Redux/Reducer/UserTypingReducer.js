import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
 typingUser:'',
 typing:''
}
const UserTypingReducer=createSlice({
     name:"theme",
     initialState,
     reducers:{
        updateUserTyping(state,action){
            state.typingUser = action.payload.typingUser;
            state.typing = action.payload.typing;
        },
     },
        extraReducers: {
     }
})
export const {updateUserTyping } =UserTypingReducer.actions
export default UserTypingReducer.reducer;