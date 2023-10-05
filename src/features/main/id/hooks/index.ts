import { API_URL } from "../../../../const";

const getDeviceSensorFetch = async (id: number) => {
  const response = await fetch(`${API_URL}/sensor`);
};
