import { useEffect, useState } from "react";
import { useDeviceInfo } from "../hooks";
import MainBodyItem from "./MainBodyItem";
import { io } from "socket.io-client";
import { API_URL } from "../../../const";

const MainBody = () => {
  const { data, refetch } = useDeviceInfo();

  useEffect(() => {
    const socket = io(API_URL);

    socket.on("create", () => {
      console.log("connect");
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });

    socket.on("updated", (data) => {
      refetch();
    });

    return () => {
      socket.close();
    };
  }, [refetch]);

  return (
    <ul className="flex flex-col gap-4 h-full px-6 box-border">
      {data?.map((device) => {
        return (
          <MainBodyItem
            key={`${device.di_idx}bodyItem`}
            deviceId={device.di_idx}
            deviceName={device.di_name}
          />
        );
      })}
    </ul>
  );
};

export default MainBody;
