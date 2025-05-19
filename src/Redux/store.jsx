import { configureStore } from "@reduxjs/toolkit";
import SliderReducer from "./Slider/SliderSlice";
import SerialsEpisod from "./SerialsEpisod/SerialsEpisod";
import FreeSlice from "./Free/FreeSlice";
import commentsReducer from "./Comments/CommentsSlice";
import { Login } from "./Login/Login";
const store = configureStore({
  reducer: {
    sliders: SliderReducer,
    ghotbs: SerialsEpisod,
    sedato: SerialsEpisod,
    oskar: SerialsEpisod,
    sepanj: SerialsEpisod,
    zodiak: SerialsEpisod,
    dolfini: SerialsEpisod,
    films: FreeSlice,
    comment: commentsReducer,
    [Login.reducerPath]: Login.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Login.middleware),
});
export default store;
