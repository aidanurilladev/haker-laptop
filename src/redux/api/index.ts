import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: ``,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};
export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryExtended,
    refetchOnReconnect: true,
    refetchOnFocus: true,
    tagTypes: ["product"],
    endpoints: () => ({}),
  });