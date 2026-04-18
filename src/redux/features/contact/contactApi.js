import baseApi from "../../api/baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContactMessages: builder.query({
      query: () => "/contact/messages",
      providesTags: ["contact"],
    }),
    sendContactMessage: builder.mutation({
      query: (messageData) => ({
        url: "/contact",
        method: "POST",
        body: messageData,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { useGetContactMessagesQuery, useSendContactMessageMutation } = contactApi;
