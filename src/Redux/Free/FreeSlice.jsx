import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchFilms = createAsyncThunk("/film/fetch", async () => {
  const res = await axios.get("http://localhost:3013/free");
  return res.data;
});
const FreeSlice = createSlice({
  name: "films",
  initialState: {
    films: []
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});
export default FreeSlice.reducer;
