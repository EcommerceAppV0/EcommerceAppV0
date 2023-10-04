import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slicers/userSlicer"
const store = configureStore({
    reducer: {
        value: userReducer
    },
})



export default store






