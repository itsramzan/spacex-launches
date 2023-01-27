import apiSlice from "features/api/apiSlice";

const launchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: () => ({
        url: "launches",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
    }),
    getLaunch: builder.query({
      query: ({ id }) => ({
        url: `launches/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
    }),
  }),
});

export default launchApi;
export const { useGetLaunchesQuery, useGetLaunchQuery } = launchApi;
