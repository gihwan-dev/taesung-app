import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WeatherData {
  wd_idx: number;
  di_idx: number;
  wd_temp: number;
  wd_humi: number;
  wd_wdd: number;
  wd_wds: number;
  reg_date: string;
}

interface WeatherDataMap {
  [key: number]: WeatherData;
}

const initialState: WeatherDataMap = {};

export const weatherDataStateSlice = createSlice({
  name: "weatherDataState",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherData>) => {
      if (action.payload) {
        state[action.payload.di_idx] = action.payload;
      }
    },
  },
});

export const { setWeatherData } = weatherDataStateSlice.actions;

export const selectWeatherData = (state: WeatherDataMap, deviceId: number) =>
  state[deviceId];

export default weatherDataStateSlice.reducer;
