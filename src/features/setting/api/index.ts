import { API_URL } from "src/const";

export const updateDeviceName = (id: number, name: string) =>
  fetch(`${API_URL}/device/${id}/name`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

export const updateUserName = (email: string, name: string) =>
  fetch(`${API_URL}/auth/name`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({ email, name }),
  });
