import { API_URL } from "src/const";
import { collectFetchType, deviceAlertType } from "../types";

export const collectFetch = (id: number, type: collectFetchType) => {
  const targetURL = new URL(`${API_URL}/device/state/${id}`);
  targetURL.searchParams.append("type", type);
  return fetch(targetURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
};

export const getDeviceAlarmDataFetch = async (id: string) => {
  const ressponse = await fetch(`${API_URL}/notification/${id}`);
  if (!ressponse.ok) {
    throw new Error("Network error");
  }
  return (await ressponse.json()) as deviceAlertType[];
};
