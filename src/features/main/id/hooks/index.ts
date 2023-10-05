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
