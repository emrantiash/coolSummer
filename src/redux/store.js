import { configureStore } from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import loginReducer from './slices/loginSlice';
import productReducer from './slices/productSlice';
import profileReducer from './slices/profileSlice';




const isClient = typeof window !== "undefined";

import { combineReducers } from "redux";

const persistConfig ={
    key : "root",
    // storage :AsyncStorage
     storage 
}

const reducer = combineReducers({
    // put all your reducers here!
    loginReducer :  loginReducer,
    productReducer : productReducer,
    profileReducer : profileReducer
    
});



const persistedReducer =  persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}); 
