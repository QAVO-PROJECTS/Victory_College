import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://victoryweb-001-site1.ptempurl.com/api',
        prepareHeaders: (headers) => {
            const token = Cookies.get('victoryToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        postAdminLogin: builder.mutation({
            query: (admin) => ({
                url: `/Admins/login`,
                method: 'POST',
                body: admin,
                headers: {'Content-Type': 'application/json'}
            }),
        }),
        getAllForms: builder.query({
            query: () => ({
                url: `/Forms`,
            }),
        }),
        postForms: builder.mutation({
            query: (data) => ({
                url: `/Forms`,
                method: 'POST',
                body: data,
            }),
        }),
        deleteForms: builder.mutation({
            query: (id) => ({
                url: `/Forms/${id}`,
                method: 'DELETE',
            }),
        }),

    }),
})
export const {
    usePostAdminLoginMutation,
    useGetAllFormsQuery,
    useDeleteFormsMutation,
    usePostFormsMutation,

} = userApi