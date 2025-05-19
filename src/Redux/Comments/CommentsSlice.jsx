import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk("/comment/fetch", async () => {
  const res = await axios.get("https://66471c4751e227f23ab11ce9.mockapi.io/Comments");
  console.log(res.data); // دیباگ: بررسی پاسخ API
  return res.data;
});

const commentsSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      console.log("Fetch Comments Fulfilled: ", action.payload); // دیباگ: بررسی داده‌های دریافتی در reducer
      state.comment = action.payload;
    });
  },
});

export default commentsSlice.reducer;
