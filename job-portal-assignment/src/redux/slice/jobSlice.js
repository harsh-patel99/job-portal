import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//called api using createAsyncThunk
export const fetchJobs = createAsyncThunk("fetchJobs", async (limit) => {
  const payload = JSON.stringify({
    limit: limit,
    offset: 0,
  });

  try {
    const result = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      payload
    );
    return result;
  } catch (error) {}
});


//logic for filtering the data
const getFilteredData = (data, filters) => {
  return data.filter((jobs) => {
    const seletedYearsOfExperience = filters.experience.length ? filters.experience.map((exp) => exp.value) : [];
    const salary = filters.salary?.map((pay) => pay.value);
    return (
      (filters.roles.length === 0 || filters.roles.some((role) => role.value === jobs.jobRole)) &&
      (filters.location.length === 0 || filters.location.some((location) => location.value === jobs.location)) &&
      (filters.remote.length === 0 || filters.remote.find(type => type.value !== "Remote") ? jobs.location !== "remote" : jobs.location === "remote") &&
      (filters.companyName || jobs.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
      (filters.experience.length === 0 || jobs.minExp <= Math.max(...seletedYearsOfExperience)) &&
      (filters.salary.length === 0 || jobs.maxJdSalary <= Math.max(...salary))
    )
  });
};


//created slice
const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    isError: null,
    data: [],
    limit: 10,
    filters: null,
    filterData: [],
  },
  reducers: {
    setNameFilter: (state, action) => {
      console.log(action.payload);
      state.filters = action.payload;
      state.filterData = getFilteredData(state.data, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.data.jdList];
      state.limit = state.limit + 10;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { setNameFilter } = jobSlice.actions;

export default jobSlice.reducer;
