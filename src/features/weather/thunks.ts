import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  WeatherLatLongRequest,
  WeatherData,
  WeatherLatLongResponse,
} from "./types";
import axios, { AxiosError } from "axios";
import { WEATHER_KEY } from "@env";

interface RejectValue {
  message: string;
}

export const fetchWeatherByCoords = createAsyncThunk<
  WeatherData,
  WeatherLatLongRequest,
  { rejectValue: RejectValue }
>("weather/fetchByCoords", async ({ lat, long }, { rejectWithValue }) => {
  try {
    const response = await axios.get<WeatherLatLongResponse>(
      `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_KEY}`,
      {
        params: { lat, lon: long, units: "metric" },
        timeout: 10000,
      }
    );
    const api = response.data;
    console.log("api", JSON.stringify(api));
    const data: WeatherData = {
      country: api.sys.country,
      city: api.name,
      temperatue: api.main.temp,
      temperatue_feel: api.main.feels_like,
      temperature_max: api.main.temp_max,
      temperature_min: api.main.temp_min,
      humidity: api.main.humidity,
      wind_speed: api.wind.speed,
      wind_dir: api.wind.deg,
    };

    return data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const message =
      axiosError.response?.data?.message ??
      (axiosError.response
        ? `HTTP ${axiosError.response.status}`
        : axiosError.message || "Unknown error");
    return rejectWithValue({ message });
  }
});
