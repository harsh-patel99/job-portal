import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    isError: null,
    data: [],
    limit: 10,
    filters: {
      name: "",
    },
  },
  reducers: {},
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
