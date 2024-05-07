import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { Box, Grid } from "@mui/material";

import JobFilters from "./JobFilters";
import JobCards from "./JobCards";
import { fetchJobs } from "../redux/slice/jobSlice";

const Home = () => {
  const dispatch = useDispatch();

  const jobsData = useSelector((state) => state.jobs.data);
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
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        dispatch(fetchJobs(limit));
      }
    };

    if (!jobsData.length) {
      dispatch(fetchJobs(limit));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, loading, limit,jobsData.length]);


  return (
    <Box m={5}>
      <JobFilters
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        data={jobsData}
      />
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
        {jobsData?.map((job) => (
          <Grid item xs={12} sm={6} md={3} key={job.jdUid}>
            <JobCards
              logo={job.logoUrl}
              location={job.location}
              jobName={job.companyName}
              role={job.jobRole}
              description={job.jobDetailsFromCompany}
              maxSalary={job.maxJdSalary}
              minExp={job.minExp}
              maxExp={job.maxExp}
            />
          </Grid>
        ))}
      </Grid>
      {loading && <div>Loading ....</div>}
    </Box>
  );
};

export default Home;
