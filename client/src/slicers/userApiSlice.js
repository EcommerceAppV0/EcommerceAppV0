import { userApi } from './apiSlice';

export const usersApiSlice = userApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "http://localhost:5000/api/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "http://localhost:5000/api/login",
                method: "POST",
                body: data
            })
        }),
    }),
})


export const { useRegisterMutation, useLoginMutation } = usersApiSlice 