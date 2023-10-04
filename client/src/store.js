import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slicers/userSlicer"
import { userApi } from "./slicers/apiSlice"
const store = configureStore({
    reducer: {
        value: userReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})



export default store






