import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    categories: [],
    productsByCategory: []
}

export const productSlicer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setProductsByCategory: (state, action) => {
            state.productsByCategory = action.payload
        }
    },
})



export const { setProducts, setCategories, setProductsByCategory } = productSlicer.actions
export default productSlicer.reducer