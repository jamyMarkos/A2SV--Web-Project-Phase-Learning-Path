import blogApi from "../services/blog_api";

export const {
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
