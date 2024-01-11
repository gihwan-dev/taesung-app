import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { booleanAsNumber } from "src/types";

interface DeviceState {
  ds_idx: number;
  di_idx: number;
  ds_door: booleanAsNumber;
  ds_bat: number;
  ds_collect: number;
  ds_remoteCollect: booleanAsNumber;
  mod_date: string;
  ds_stop: booleanAsNumber;
}

interface DeviceListMap {
  [key: number]: DeviceState;
}

const initialState: DeviceListMap = {};

export const deviceStateSlice = createSlice({
  name: "deviceState",
  initialState,
  reducers: {
    setDeviceState: (state, action: PayloadAction<DeviceState>) => {
      if (action.payload.di_idx) {
        state[action.payload.di_idx] = action.payload;
      }
    },
  },
});

export const { setDeviceState } = deviceStateSlice.actions;

export const selectDeviceState = (state: DeviceListMap, deviceId: number) =>
  state[deviceId];

export default deviceStateSlice.reducer;
