"use client";

import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import NftCard from "./NftCard/NftCard";
import { useGetAllNftQuery } from "@/redux/api/nftApi";
import LoadingBar from "@/components/Loader/LoadingBar";
import { TNftData } from "@/types";

const NftGallery = () => {
  const [params, setParams] = useState([]);

  const { data: galleryData, isLoading } = useGetAllNftQuery([...params]);

  console.log(galleryData);

  return (
    <Container
      sx={{
        mb: "80px",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight={600}
        sx={{
          mb: "40px",
        }}
      >
        Your NFT Gallery
      </Typography>

      {isLoading ? (
        <LoadingBar />
      ) : galleryData?.response && galleryData.response.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {galleryData.response.map((data: TNftData) => (
            <NftCard
              key={data._id}
              name={data.name}
              description={data.description}
              logoUrl={data.logoUrl}
            />
          ))}
        </Box>
      ) : (
        <Typography>No NFTs found</Typography>
      )}
    </Container>
  );
};

export default NftGallery;
