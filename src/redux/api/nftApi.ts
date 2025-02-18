import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const nftApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createNft: build.mutation({
      query: (data) => ({
        url: "/nft/create-nft",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.nftData],
    }),

    getSingleNft: build.query({
      query: (id) => ({
        url: `/nft/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.nftData],
    }),

    getAllNft: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/nft",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: []) => {
        return {
          response,
        };
      },
      providesTags: [tagTypes.nftData],
    }),
  }),
});

export const { useCreateNftMutation, useGetSingleNftQuery, useGetAllNftQuery } =
  nftApi;
