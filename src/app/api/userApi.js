import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),

  tagTypes: ["users"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),

    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
} = usersApi;