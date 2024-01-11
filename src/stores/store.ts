import { configureStore } from "@reduxjs/toolkit";
import deviceStateReducer from "./device_state.slice";
import sensorDataStateReducer from "./sensor_data.slice";
import weatherDataStateReducer from "./weather_data.slice";

const store = configureStore({
  reducer: {
    deviceState: deviceStateReducer,
    sensorDataState: sensorDataStateReducer,
    weatherDataState: weatherDataStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
