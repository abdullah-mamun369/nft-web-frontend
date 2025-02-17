import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { axiosBaseQuery } from "@/app/helpers/axios/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://nft-web-backend.onrender.com/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
