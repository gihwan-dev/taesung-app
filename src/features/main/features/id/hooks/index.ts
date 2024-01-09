import { useMutation, useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../const";
import {
  collectFetch,
  getDeviceAlarmDataFetch,
  updateAlarmDataFetch,
  updateDeviceBat,
  updateDeviceMaxOu,
  updateDeviceOu,
} from "../fetch";
import { collectFetchType, UpdateAlarmDateFetchType } from "../types";

const getDeviceSensorFetch = async (id: number) => {
  const response = await fetch(`${API_URL}/sensor/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any[];
};

export const useDeviceSensor = (id: number) => {
  return useQuery({
    queryFn: () => getDeviceSensorFetch(id),
    queryKey: ["device", "sensor", id],
  });
};

const getDeviceCollectFetch = async (id: number) => {
  if (!id) {
    throw new Error("id not defined");
  }
  const response = await fetch(`${API_URL}/collect/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any;
};

export const useDeviceCollect = (id: number) => {
  return useQuery({
    refetchInterval: 1000,
    queryFn: () => getDeviceCollectFetch(id),
    queryKey: ["device", "collect", id],
  });
};

const getWeatherFetch = async (id: number) => {
  if (!id) {
    throw new Error("id not defined");
  }
  const response = await fetch(`${API_URL}/weather/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any;
};

export const useWeather = (id: number) => {
  return useQuery({
    queryKey: ["weather", id],
    queryFn: () => getWeatherFetch(id),
  });
};

const getAllSensorFetch = async () => {
  const response = await fetch(`${API_URL}/sensor`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any[];
};

export const useAllSensor = () => {
  return useQuery({
    queryKey: ["sensor"],
    queryFn: getAllSensorFetch,
  });
};

const getDeviceSettingFetch = async (id: string | null) => {
  if (!id) {
    throw new Error("id is not defined");
  }
  const response = await fetch(`${API_URL}/setting/device/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any;
};

export const useDeviceSetting = (id: string | null) => {
  return useQuery({
    queryFn: () => getDeviceSettingFetch(id),
    queryKey: ["setting", "device", id],
    refetchInterval: 35600000000,
    refetchOnWindowFocus: false,
  });
};

type BooleanAsNumber = 1 | 0;

type AlertSettingType = {
  as_bat: BooleanAsNumber;
  as_batSet: number;
  as_collect: BooleanAsNumber;
  as_door: BooleanAsNumber;
  as_idx: number;
  as_ou: BooleanAsNumber;
  as_ouSet: number;
  di_idx: number;
  mod_date: string;
};

const getAlertSettingFetch = async (id: string | null) => {
  if (!id) {
    throw new Error("id is not defined");
  }
  const response = await fetch(`${API_URL}/setting/notification/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as AlertSettingType;
};

export const useAlertSetting = (id: string | null) => {
  return useQuery({
    queryFn: () => getAlertSettingFetch(id),
    queryKey: ["alert", "device", "setting", id],
  });
};

export const useUpdateCollect = () => {
  return useMutation({
    mutationFn: ({ id, type }: { id: number; type: collectFetchType }) =>
      collectFetch(id, type),
  });
};

export const useDeviceAlarmData = (id: string) => {
  return useQuery({
    queryFn: () => getDeviceAlarmDataFetch(id),
    queryKey: ["device", "alarm", id],
  });
};

export const useUpdateAlarmData = () => {
  return useMutation({
    mutationFn: (data: UpdateAlarmDateFetchType) => updateAlarmDataFetch(data),
    mutationKey: ["device", "alarm"],
  });
};

export const useUpdateOu = () => {
  return useMutation({
    mutationFn: ({ id, ou }: { id: number; ou: number }) =>
      updateDeviceOu(id, ou),
  });
};

export const useUpdateBat = () => {
  return useMutation({
    mutationFn: ({ id, bat }: { id: number; bat: number }) => {
      return updateDeviceBat(id, bat);
    },
  });
};

export const useUpdateMaxOu = () => {
  return useMutation({
    mutationFn: ({
      id,
      maxOu,
      delay,
    }: {
      id: number;
      maxOu: number;
      delay: number;
    }) => updateDeviceMaxOu(id, maxOu, delay),
  });
};
