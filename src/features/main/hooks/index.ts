import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../const";

const getDeviceInfoFetcher = async () => {
  const response = await fetch(`${API_URL}/device`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return (await response.json()) as any[];
};

export const useDeviceInfo = () => {
  return useQuery({
    queryFn: getDeviceInfoFetcher,
    queryKey: ["device"],
  });
};

const getDeviceStateFetcher = async (deviceId: string) => {
  const response = await fetch(`${API_URL}/device/${deviceId}`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return (await response.json()) as any;
};

export const useDeviceState = (deviceId: string) => {
  return useQuery({
    refetchInterval: 1000,
    queryFn: () => getDeviceStateFetcher(deviceId),
    queryKey: ["device", deviceId],
  });
};
