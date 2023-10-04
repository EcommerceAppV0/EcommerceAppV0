import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"


const initialState = {
    user: null,
}

export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        registerUser: async (state, action) => {
            console.log(action.payload);
            try {
                const response = await axios.post("http://localhost:5000/api/register", action.payload, state)
                console.log(response.data);
                state.user = response.data.result
                console.log(state.user);
                // window.location.href = "/login"
            } catch (error) {
                console.log(error);
            }
        }
    }
})

export const { setUser, logout, registerUser } = userSlicer.actions
export default userSlicer.reducer
