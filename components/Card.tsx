import React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

interface Props {
  name: string;
  region: string;
  population: number;
  flag: string;
  capital: string;
}

const Card = ({ name, region, population, flag, capital }: Props) => {
  return (
    <MuiCard sx={{ width: "20vw", marginBottom: "2rem" }}>
      <CardMedia
        sx={{ height: "10vh" }}
        component="img"
        alt="green iguana"
        height="140"
        image={flag}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1ren", fontweight: 700 }}
        >
          {name}
        </Typography>
        <Typography>
          <b>Population: {population}</b>
        </Typography>
        <Typography>
          <b>Region: {region}</b>
        </Typography>
        <Typography>
          <b>Capital: {capital}</b>
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
