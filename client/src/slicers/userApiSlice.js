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
        updateInfo: builder.mutation({
            query: (data) => ({
                url: "http://localhost:5000/api/updateInfo",
                method: "PUT",
                body: data
            })
        }),
        updateLists: builder.mutation({
            query: ({ cartlist, wishlist, id }) => ({
                url: `http://localhost:5000/api/updateLists/${id}`,
                method: "PUT",
                body: wishlist ? { wishlist } : { cartlist }
            })
        }),
        getAllProducts: builder.mutation({
            query: (data) => ({
                url: "http://localhost:5000/api/products/getAll",
                method: "GET",
            })
        }),
        getAllCategories: builder.mutation({
            query: (data) => ({
                url: "http://localhost:5000/api/categories/getAll",
                method: "GET"
            })
        }),
        getOneCategory: builder.mutation({
            query: (id) => ({
                url: `http://localhost:5000/api/categories/${id}`,
                method: "GET"
            })
        })
    }),
})


export const {
    useRegisterMutation,
    useLoginMutation,
    useUpdateInfoMutation,
    useUpdateListsMutation,
    useGetAllProductsMutation,
    useGetAllCategoriesMutation,
    useGetOneCategoryMutation
} = usersApiSlice 
