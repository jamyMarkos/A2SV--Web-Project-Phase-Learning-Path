import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Blog {
  id: number;
  title: string;
  date: string;
  body: string;
}

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => `/posts`,
    }),
    getBlogById: builder.query<Blog, number>({
      query: (id) => `/post/${id}`,
    }),
    addBlog: builder.mutation<Blog, Partial<Blog>>({
      query: (blog) => ({
        url: "/posts",
        method: "POST",
        body: blog,
      }),
    }),
    deleteBlog: builder.mutation<number, Blog>({
      query: (id) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default blogApi;
