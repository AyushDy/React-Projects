import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  tagTypes: ["ToDo"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "/todos",
      providesTags: ["ToDo"],
    }),
    addToDo: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["ToDo"],
    }),
    updateToDo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["ToDo"],
    }),
    deleteToDo: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["ToDo"],
    }),
  }),
});

export const {
  useGetToDosQuery,
  useAddToDoMutation,
  useUpdateToDoMutation,
  useDeleteToDoMutation,
} = apiSlice;
