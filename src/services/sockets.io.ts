import { io } from "socket.io-client";
import { API_URL } from "src/const";

export const socket = io(API_URL, {
  transports: ["websocket"],
  autoConnect: true,
});
