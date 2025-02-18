"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/svgs/logo.svg";
import connectWallet from "@/assets/svgs/contact-wallet.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box component={Link} href="/">
          <Image src={logo} width={24} height={24} alt="logo" />
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            sx={{
              background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              textTransform: "none",
            }}
          >
            <Image src={connectWallet} width={16} height={16} alt="logo" />
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
              Connect Wallet
            </Box>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
