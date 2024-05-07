import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";


const animatedComponents = makeAnimated();

const JobFilters = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 4, md: 12 }}
      >
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={[]}
            placeholder="Roles"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={[]}
            placeholder="Location"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={[]}
            placeholder="Minimum Experience"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={[]}
            placeholder="Remote"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={[]}
            placeholder="Minimum Base Pay"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Search Company here"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobFilters;
