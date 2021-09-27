import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useState } from "react";


const initialState = [
    // { id: 1, title: 'todo1', completed: false },
    // { id: 2, title: 'todo2', completed: false },
    // { id: 3, title: 'todo3', completed: true },
]



const MessageReducer = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage(state, action) {
            const newMessage = {
                id: action.payload.id,
                user: action.payload.user,
                text: action.payload.text,
                delivered: action.payload.delivered,
                seen:false,
                sendTime:action.payload.sendTime
            };
            state.push(newMessage)
        },
       
        getMessages(state, action) {
            const datas = [...action.payload[0]];
            return datas;
        },
        // handling editing operations at offline
        toggleMessageDelivered: (state, action) => {
            const index = state.findIndex(
                (message) =>message.id === action.payload.id
            );
            console.log(index);
            if(index!=-1){
                  state[index].delivered =action.payload.delivered;
            }
            console.log(state[index].delivered,"value from redux togglemessage delivered")
          
        },
        toggleMessageSeen: (state, action) => {
            const index = state.findIndex(
                (message) =>message.id === action.payload.id
            );
            console.log(index);
            if(index!=-1){
                  state[index].seen =action.payload.seen;
            }
        },
    },
    extraReducers: {


    }
})
export const { addMessage, getMessages, toggleMessageDelivered,toggleMessageSeen,userTypingMessage } = MessageReducer.actions
export default MessageReducer.reducer;