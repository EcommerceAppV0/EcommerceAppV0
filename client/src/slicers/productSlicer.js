import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products :[],
    categories :[]
}

export const productSlicer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts : (state,action)=>{
            state.products = action.payload
        },
        setCategories : (state,action)=>{
            state.categories = action.payload
        },
    },
})



export const { setProducts , setCategories} = productSlicer.actions
export default productSlicer.reducer