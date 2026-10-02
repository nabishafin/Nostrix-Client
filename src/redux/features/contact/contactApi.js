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
    updateMessageStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/contact/messages/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["contact"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/contact/messages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetContactMessagesQuery,
  useSendContactMessageMutation,
  useUpdateMessageStatusMutation,
  useDeleteMessageMutation,
} = contactApi;
