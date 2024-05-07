import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

import { FilterOptions } from "../filterData";

const animatedComponents = makeAnimated();

const JobFilters = ({ values, handleChange, setFieldValue, data }) => {
  const { roles, location, experience, remote, salary, companyName } = values;

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
            name="roles"
            onChange={(value) => setFieldValue("roles", value)}
            value={roles}
            isMulti
            options={FilterOptions(data, "jobRole")}
            placeholder="Roles"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            name="location"
            onChange={(value) => setFieldValue("location", value)}
            value={location}
            isMulti
            options={FilterOptions(data, "location")}
            placeholder="Location"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            name="experience"
            onChange={(value) => setFieldValue("experience", value)}
            value={experience}
            isMulti
            options={[]}
            placeholder="Experience"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            name="remote"
            onChange={(value) => setFieldValue("remote", value)}
            value={remote}
            isMulti
            options={[
              { label: "Remote", value: "Remote" },
              { label: "On Site", value: "On Site" },
            ]}
            placeholder="Remote"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            name="salary"
            onChange={(value) => setFieldValue("salary", value)}
            value={salary}
            isMulti
            options={[]}
            placeholder="Minimum Base Pay"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TextField
            id="outlined-basic"
            size="small"
            name="companyName"
            value={companyName}
            onChange={handleChange}
            label="Search Company here"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobFilters;
