import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
   displayName:"",
   email:"",
}
const authReducer=createSlice({
     name:"user",
     initialState,
     reducers:{
        updateName(state, action) {
           console.log(action.payload)
            state.displayName = action.payload
        },
        updateEmail(state, action) {
            state.email = action.payload
        }, 
     },
        extraReducers: {
     }
})
export const { updateName,updateEmail } = authReducer.actions
export default authReducer.reducer;