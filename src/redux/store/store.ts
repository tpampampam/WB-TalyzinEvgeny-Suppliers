import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../api/apiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



const store = configureStore({
    reducer:{[apiSlice.reducerPath] : apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;