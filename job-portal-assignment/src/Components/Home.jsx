import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { Box, Grid } from "@mui/material";

import JobFilters from "./JobFilters";
import JobCards from "./JobCards";
import { fetchJobs, setNameFilter } from "../redux/slice/jobSlice";

const Home = () => {
  const dispatch = useDispatch();

  const jobsData = useSelector((state) => state.jobs.data);
  const filteredData = useSelector((state) => state.jobs.filterData);
  const loading = useSelector((state) => state.jobs.isLoading);
  const limit = useSelector((state) => state.jobs.limit);


  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      roles: [],
      location: [],
      experience: [],
      remote: [],
      salary: [],
      companyName: "",
    },
  });

  
  useEffect(() => {

    //logic for Inifinite Scrolling
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        dispatch(fetchJobs(limit));
      }
    };

    //dispatched action when filters are selected
    dispatch(setNameFilter(values));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, values]);

  useEffect(() => {
    if (!jobsData?.length) {
      dispatch(fetchJobs(limit));
    }
  }, []);

  return (
    <Box m={5}>
      <JobFilters
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        data={jobsData}
      />
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
        {(filteredData?.length ? filteredData : jobsData)?.map((job, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <JobCards
              key={i}
              logo={job.logoUrl}
              location={job.location}
              jobName={job.companyName}
              role={job.jobRole}
              description={job.jobDetailsFromCompany}
              maxSalary={job.maxJdSalary}
              minExp={job.minExp}
              maxExp={job.maxExp}
              minSalary={job.minJdSalary}
            />
          </Grid>
        ))}
      </Grid>
      {loading && <div>Loading ....</div>}
    </Box>
  );
};

export default Home;
