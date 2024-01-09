import { API_URL } from "src/const";
import {
  UpdateAlarmDateFetchType,
  collectFetchType,
  deviceAlertType,
} from "../types";

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

export const updateAlarmDataFetch = async ({
  type,
  id,
  value,
}: UpdateAlarmDateFetchType) => {
  return fetch(`${API_URL}/notification/${id}?type=${type}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
  });
};

export const updateDeviceOu = (id: number, ou: number) =>
  fetch(`${API_URL}/device/${id}/ou`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ou }),
  });

export const updateDeviceBat = (id: number, bat: number) =>
  fetch(`${API_URL}/device/${id}/bat`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bat }),
  });

export const updateDeviceMaxOu = (id: number, maxOu: number, delay: number) => {
  return fetch(`${API_URL}/device/${id}/maxOu`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ maxOu, delay }),
  });
};
