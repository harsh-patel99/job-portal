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
    if (filters.roles?.length) {
      return filters.roles.some((role) => role.value === jobs.jobRole);
    }
    if (filters.location?.length) {
      return filters.location.some(
        (location) => location.value === jobs.location
      );
    }
    if (filters.remote?.length) {
      return filters.remote.find((val) => val.value !== "Remote")
        ? jobs.location !== "remote"
        : jobs.location === "remote";
    }
    if (filters.companyName) {
      return jobs.companyName
        .toLowerCase()
        .includes(filters.companyName.toLowerCase());
    }
    if (filters.experience?.length) {
      const years = filters.experience.map((exp) => exp.value);
      return jobs.minExp <= Math.max(...years);
    }
    if (filters.salary?.length) {
      const salary = filters.salary.map((pay) => pay.value);
      return jobs.maxJdSalary <= Math.max(...salary);
    }
    return true;
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
