import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slicers/userSlicer"
import { userApi } from "./slicers/apiSlice"
import productReducer from "./slicers/productSlicer"



const store = configureStore({
    reducer: {
        value: userReducer,
        prod : productReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})



export default store






