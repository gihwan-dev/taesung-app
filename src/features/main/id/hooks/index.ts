import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../const";

const getDeviceSensorFetch = async (id: number) => {
  const response = await fetch(`${API_URL}/sensor/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any;
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

const getAlertSettingFetch = async (id: string | null) => {
  if (!id) {
    throw new Error("id is not defined");
  }
  const response = await fetch(`${API_URL}/setting/notification/${id}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  return (await response.json()) as any;
};

export const useAlertSetting = (id: string | null) => {
  return useQuery({
    queryFn: () => getAlertSettingFetch(id),
    queryKey: ["alert", "device", "setting", id],
  });
};
