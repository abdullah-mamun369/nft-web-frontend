"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateNftMutation } from "@/redux/api/nftApi";
import NftForm from "@/components/Forms/NftForm";
import { toast } from "sonner";
import NftInput from "@/components/Forms/NftInput";
import Image from "next/image";
import mintNft from "@/assets/svgs/mint-nft.svg";

export const NftValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required!",
    invalid_type_error: "Name must be a string!",
  }),
  description: z.string({
    required_error: "Description is required!",
    invalid_type_error: "Descriptionmust be a string!",
  }),
  logoUrl: z.string({
    required_error: "Url is required!",
    invalid_type_error: "Url must be a string!",
  }),
  address: z.string({
    required_error: "Address is required!",
    invalid_type_error: "Address must be a string!",
  }),
});

const CreateNft = () => {
  const [createDoctor] = useCreateNftMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log("Submission clicking");
    console.log(values);

    try {
      const res = await createDoctor(values);

      if (res?.data?.id) {
        toast.success("NFT created successfully!");
      } else if (
        res?.error &&
        typeof res.error === "object" &&
        "message" in res.error
      ) {
        toast.error(String(res.error.message));
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          my: "80px",
        }}
      >
        <Box
          sx={{
            width: "576px",
            borderRadius: "16px",
            borderWidth: "1px",
            border: "1px solid #1F2937",
            background: "#11182780",
            p: 4,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Mint Your NFT
            </Typography>
          </Box>
          <Box>
            <NftForm
              onSubmit={handleFormSubmit}
              resolver={zodResolver(NftValidationSchema)}
            >
              <Grid container spacing={2}>
                <Grid item md={12} my={1}>
                  <Grid item md={12} my={2}>
                    <NftInput
                      name="name"
                      label="NFT Name"
                      fullWidth={true}
                      sx={{
                        borderRadius: "8px",
                        borderWidth: "1px",
                        background: "#1F2937",
                        border: "1px solid #374151",
                        "& .MuiOutlinedInput-root": {
                          "&:hover": {
                            borderColor: "white",
                          },
                          "&.Mui-focused": {
                            borderColor: "white",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "white",
                        },
                        "& input::placeholder": {
                          color: "white",
                        },
                        "& input:focus::placeholder": {
                          color: "white",
                        },
                        "& input": {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item md={12} my={2}>
                    <NftInput
                      name="description"
                      label="Describe your NFT"
                      fullWidth={true}
                      sx={{
                        borderRadius: "8px",
                        borderWidth: "1px",
                        background: "#1F2937",
                        border: "1px solid #374151",
                        height: "100px",
                        "& .MuiOutlinedInput-root": {
                          height: "100%",
                          "&:hover": {
                            borderColor: "white",
                          },
                          "&.Mui-focused": {
                            borderColor: "white",
                            outline: "none",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "white",
                        },
                        "& input::placeholder": {
                          color: "white",
                        },
                        "& input:focus::placeholder": {
                          color: "white",
                        },
                        "& input": {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item md={12} my={2}>
                    <NftInput
                      name="logoUrl"
                      label="Image URL"
                      fullWidth={true}
                      sx={{
                        borderRadius: "8px",
                        borderWidth: "1px",
                        background: "#1F2937",
                        border: "1px solid #374151",
                        "& .MuiOutlinedInput-root": {
                          "&:hover": {
                            borderColor: "white",
                          },
                          "&.Mui-focused": {
                            borderColor: "white",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "white",
                        },
                        "& input::placeholder": {
                          color: "white",
                        },
                        "& input:focus::placeholder": {
                          color: "white",
                        },
                        "& input": {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  textTransform: "none",
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                <Image src={mintNft} width={16} height={16} alt="logo" />
                <Box
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "19.36px",
                    letterSpacing: "0%",
                    ml: "7px",
                  }}
                >
                  Mint NFT
                </Box>
              </Button>
            </NftForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default CreateNft;
