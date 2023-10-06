import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../const";

const getNotificationFetch = async () => {
  const response = await fetch(`${API_URL}/notification`);

  if (!response.ok) {
    throw new Error("Network Error");
  }

  return (await response.json()) as any[];
};

export const useNotification = () => {
  return useQuery({
    queryFn: getNotificationFetch,
    queryKey: ["notification"],
  });
};
