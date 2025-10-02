export interface WeatherLatLongRequest {
  lat: number;
  long: number;
}

export interface WeatherLatLongResponse {
  sys: {
    country: string;
  };
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherData {
  city: string;
  country: string;
  temperatue: number;
  temperatue_feel: number;
  temperature_min: number;
  temperature_max: number;
  humidity: number;
  wind_speed: number;
  wind_dir: number;
}

export interface WeatherState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: WeatherData | null;
  error: string | null;
}
