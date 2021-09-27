import { configureStore, } from '@reduxjs/toolkit'
import authReducer from './authReducer'
import MessageReducer from './MessageReducer'
import ReceiverProfileReducer from './ReceiverProfileReducer'
import ThemeReducer from './ThemeReducer'
import UserRoomReducer from './UserRoomReducer'
import UserTypingReducer from './UserTypingReducer'

export const store = configureStore({
    reducer:{
        // todos:ToDoReducer,
        auth:authReducer,
        room:UserRoomReducer,
        messages:MessageReducer,
        receiver:ReceiverProfileReducer,
        themes:ThemeReducer,
        typingUser:UserTypingReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })