import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SensorData {
  sd_idx: number;
  di_idx: number;
  sd_mos: number;
  sd_ou: number;
  reg_date: string;
}

interface SensorDataMap {
  [key: number]: SensorData;
}

const initialState: SensorDataMap = {};

export const sensorDataStateSlice = createSlice({
  name: "sensorDataState",
  initialState,
  reducers: {
    setSensorData: (state, action: PayloadAction<SensorData>) => {
      if (action.payload.di_idx) {
        state[action.payload.di_idx] = action.payload;
      }
    },
  },
});

export const { setSensorData } = sensorDataStateSlice.actions;

export const selectSensorData = (state: SensorDataMap, deviceId: number) =>
  state[deviceId];

export default sensorDataStateSlice.reducer;
