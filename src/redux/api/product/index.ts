import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getLaptop: build.query<CHACKERS.GetLaptopRes,CHACKERS.GetLaptopReq>({
      query: () => ({
        url: `/laptop/laptop_list/`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {useGetLaptopQuery  } = api;
