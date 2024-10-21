import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import Card from "./Card";
import { useStore } from "../Store";
import { useState } from "react";
import { useMemo } from "react";

const CountrySearch = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const [region, setRegion] = React.useState("");
  const [data, setData] = useState([
    {
      name: { common: "" },
      flags: { png: "" },
      capital: [""],
      population: 0,
      region: "",
    },
  ]);

  const [filteredCountries, setFilteredCountries] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  const handleTyping = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(e.target.value);
  };

  useMemo(() => {
    let countries = [];

    if (region !== "") {
      countries = data.filter((country) => country.region === region);

      if (searchValue !== "") {
        setFilteredCountries(
          countries.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        );
      } else {
        setFilteredCountries(countries);
      }
    } else if (region === "") {
      if (searchValue !== "") {
        setFilteredCountries(
          data.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        );
      } else {
        setFilteredCountries(data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, region, searchValue]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredCountries(data);
      });
  }, []);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 0px 2rem 0px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search for a country"
          variant="outlined"
          sx={{
            width: "30vw",
          }}
          onChange={(e) => {
            handleTyping(e);
          }}
        />
        <FormControl
          sx={{
            width: "20vw",
            backgroundColor: isDarkMode ? "#222e37" : "#ffffff",
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Filter by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "Wrap",
        }}
      >
        {filteredCountries.map((country) => {
          return (
            <Card
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
              key={country.name.common}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CountrySearch;
