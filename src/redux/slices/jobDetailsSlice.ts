import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface SampleJD {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

interface SampleJdInterface {
  sampleJD: {
    jdList: SampleJD[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: SampleJdInterface = {
  sampleJD: {
    jdList: [],
  },
  loading: false,
  error: "",
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const fetchSampleJd = createAsyncThunk(
  "sampleJD",
  async (limit: number) => {
    const body = JSON.stringify({
      limit: limit,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    return fetch(
      `https://api.weekday.technology/adhoc/getSampleJdJSON`,
      requestOptions
    ).then((res) => res.json());
  }
);

const jobDetailsSlice = createSlice({
  name: "jobDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleJd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSampleJd.fulfilled, (state, action) => {
        state.loading = false;
        state.sampleJD = action.payload;
      })
      .addCase(fetchSampleJd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default jobDetailsSlice.reducer;
