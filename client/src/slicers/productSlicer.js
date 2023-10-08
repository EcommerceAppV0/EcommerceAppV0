import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    categories: [],
    productsByCategory: [],
    productDetails : localStorage.getItem("productDetails") ?  JSON.parse(localStorage.getItem("productDetails")) : null
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
        },
        setProductDetails : (state, action) => {
            state.productDetails = action.payload
            localStorage.setItem("productDetails", JSON.stringify(action.payload))
        }
    },
})



export const { setProducts, setCategories, setProductsByCategory , setProductDetails} = productSlicer.actions
export default productSlicer.reducer