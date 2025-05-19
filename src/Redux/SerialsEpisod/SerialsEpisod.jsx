import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchGhotb = createAsyncThunk("/ghotbs/fetch", async () => {
  const res = await axios.get("http://localhost:3013/ghotb");
  return res.data;
});
export const fetchSedato = createAsyncThunk("/sedato/fetch", async () => {
  const res = await axios.get("http://localhost:3013/sedato");
  return res.data;
});
export const fetchOskar = createAsyncThunk("/oskar/fetch", async () => {
  const res = await axios.get("http://localhost:3013/oskar");
  return res.data;
});
export const fetchSepanj = createAsyncThunk("/sepanj/fetch", async () => {
  const res = await axios.get("http://localhost:3013/sepanj");
  return res.data;
});
export const fetchZodiak = createAsyncThunk("/zodiak/fetch", async () => {
  const res = await axios.get("http://localhost:3013/zodiak");
  return res.data;
});
export const fetchDolfini = createAsyncThunk("/dolfini/fetch", async () => {
  const res = await axios.get("http://localhost:3013/pesaredolfini");
  return res.data;
});
const SerialsEpisod = createSlice({
  name: "ghotbs",
  initialState: {
    ghotbs: [],
  },
  name: "sedato",
  initialState: {
    sedato: [],
  },
  name: "oskar",
  initialState: {
    oskar: [],
  },
  name: "sepanj",
  initialState: {
    sepanj: [],
  },
  name: "zodiak",
  initialState: {
    zodiak: [],
  },
  name: "dolfini",
  initialState: {
    dolfini: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGhotb.fulfilled, (state, action) => {
      state.ghotbs = action.payload;
    });
    builder.addCase(fetchSedato.fulfilled, (state, action) => {
      state.sedato = action.payload;
    });
    builder.addCase(fetchOskar.fulfilled, (state, action) => {
      state.oskar = action.payload;
    });
    builder.addCase(fetchSepanj.fulfilled, (state, action) => {
      state.sepanj = action.payload;
    });
    builder.addCase(fetchZodiak.fulfilled, (state, action) => {
      state.zodiak = action.payload;
    });
    builder.addCase(fetchDolfini.fulfilled, (state, action) => {
      state.dolfini = action.payload;
    });
  },
});
export default SerialsEpisod.reducer;
