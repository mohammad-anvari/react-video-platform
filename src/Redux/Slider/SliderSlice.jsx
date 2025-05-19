import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSliders = createAsyncThunk("/ghotb/fetch", async () => {
  const res = await axios.get("http://localhost:3013/Slider");
  return res.data;
});
const SliderSlice = createSlice({
  name: "sliders",
  initialState: {
    sliders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSliders.fulfilled, (state, action) => {
      state.sliders = action.payload;
    });
  },
});
export default SliderSlice.reducer;
