import baseApi from "../../api/baseApi";

export const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => "/testimonials",
      providesTags: ["testimonials"],
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialsApi;
