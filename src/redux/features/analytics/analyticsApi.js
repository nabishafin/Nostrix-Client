import baseApi from "../../api/baseApi";

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnalyticsSummary: builder.query({
      query: (days = 14) => `/analytics/summary?days=${days}`,
      providesTags: ["analytics"],
    }),
  }),
});

export const { useGetAnalyticsSummaryQuery } = analyticsApi;
