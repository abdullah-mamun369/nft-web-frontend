import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import startCreating from "@/assets/svgs/start-creating.svg";
import watchDemo from "@/assets/svgs/watch-demo.svg";
const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 75px)",
      }}
    >
      <Typography variant="h2" component="h1" fontWeight={600}>
        Discover & Collect
      </Typography>
      <Typography variant="h2" component="h1" fontWeight={600}>
        Extraordinary NFTs
      </Typography>

      <Typography fontWeight={400} sx={{ my: 4, textAlign: "center" }}>
        Enter the world of digital art and collectibles. Explore unique NFTs
        created by artists
        <br />
        worldwide.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          sx={{
            background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
            color: "white",
            padding: "12px 24px",
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          <Image src={startCreating} width={16} height={16} alt="logo" />
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
            Start Creating
          </Box>
        </Button>
        <Button
          sx={{
            backgroundColor: "rgba(31, 41, 55, 0.5)",
            border: "1px solid #374151",
            borderRadius: "12px",
            color: "white",
            padding: "12px 24px",
            textTransform: "none",
          }}
        >
          <Image src={watchDemo} width={16} height={16} alt="logo" />
          <Box
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.36px",
              letterSpacing: "0%",
              ml: "7px",
            }}
          >
            Watch Demo
          </Box>
        </Button>
      </Box>
    </Container>
  );
};

export default HeroSection;
