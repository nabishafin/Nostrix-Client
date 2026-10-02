import baseApi from "../../api/baseApi";

export const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => "/testimonials",
      providesTags: ["testimonials"],
    }),
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonials"],
    }),
    updateTestimonial: builder.mutation({
      query: ({ id, data }) => ({
        url: `/testimonials/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["testimonials"],
    }),
    deleteTestimonial: builder.mutation({
      query: (id) => ({
        url: `/testimonials/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonials"],
    }),
  }),
});

export const {
  useGetTestimonialsQuery,
  useCreateTestimonialMutation,
  useUpdateTestimonialMutation,
  useDeleteTestimonialMutation,
} = testimonialsApi;
