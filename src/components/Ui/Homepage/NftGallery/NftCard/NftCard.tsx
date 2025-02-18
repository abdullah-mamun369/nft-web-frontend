import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";

interface NftCardProps {
  name: string;
  description: string;
  logoUrl: string;
}

const NftCard: React.FC<NftCardProps> = ({ name, description, logoUrl }) => {
  return (
    <Card
      sx={{
        minWidth: 350,
        borderRadius: "12px",
        border: "1px solid #1F2937",
        backgroundColor: "#11182780",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <Image
          src={logoUrl}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          alt="logo"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#FFFFFF" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "0%",
              color: "#9CA3AF",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NftCard;
