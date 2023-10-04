import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    userToken: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null,
    loggedIn: false,
}

export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem('userInfo')
            localStorage.removeItem('userToken')
        },
    }
})

export const { setUser, logout ,setLoggedIn} = userSlicer.actions
export default userSlicer.reducer
