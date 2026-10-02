import baseApi from "../../api/baseApi";

// Skills and team members (editable from the admin panel)
export const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => "/skills",
      providesTags: ["skills"],
    }),
    createSkill: builder.mutation({
      query: (data) => ({ url: "/skills", method: "POST", body: data }),
      invalidatesTags: ["skills"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, data }) => ({ url: `/skills/${id}`, method: "PUT", body: data }),
      invalidatesTags: ["skills"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({ url: `/skills/${id}`, method: "DELETE" }),
      invalidatesTags: ["skills"],
    }),

    getTeam: builder.query({
      query: () => "/team",
      providesTags: ["team"],
    }),
    createTeamMember: builder.mutation({
      query: (data) => ({ url: "/team", method: "POST", body: data }),
      invalidatesTags: ["team"],
    }),
    updateTeamMember: builder.mutation({
      query: ({ id, data }) => ({ url: `/team/${id}`, method: "PUT", body: data }),
      invalidatesTags: ["team"],
    }),
    deleteTeamMember: builder.mutation({
      query: (id) => ({ url: `/team/${id}`, method: "DELETE" }),
      invalidatesTags: ["team"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
  useGetTeamQuery,
  useCreateTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = contentApi;
