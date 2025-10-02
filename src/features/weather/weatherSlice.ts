import { createSlice } from "@reduxjs/toolkit";
import type { WeatherState } from "./types";
import { fetchWeatherByCoords } from "./thunks";

const initialState: WeatherState = {
  status: "idle",
  data: null,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clear(state) {
      state.status = "idle";
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCoords.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeatherByCoords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherByCoords.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message ?? action.error.message ?? "Unknown error";
      });
  },
});

export const { clear } = weatherSlice.actions;
export default weatherSlice.reducer;
