import React from "react";
import { useDeviceState } from "../hooks";
import { getBatteryIcon, getDeviceState } from "../utils/index";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { inAndOut } from "src/utils/framer-motion.utils";

const MainBodyItem: React.FC<{
  deviceName: string;
  deviceId: string;
}> = ({ deviceId, deviceName }) => {
  const { data, isLoading } = useDeviceState(deviceId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <NavLink to={`/main/${deviceId}`}>
      <motion.li
        {...inAndOut}
        className="w-full flex flex-row items-center justify-evenly py-6 gap-6 bg-white px-4 rounded-lg shadow-lg box-border hover:scale-105 border border-gray-100"
      >
        <div>{getDeviceState(data.ds_collect)}</div>
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-lg font-bold">{deviceName}</p>
          <div className="flex flex-row gap-4 items-center justify-items-center">
            <p className="font-semibold">
              {data?.ds_door === 0 ? "문 닫힘" : "문 열림"}
            </p>
            <div className="h-6 border border-gray-300"></div>

            <div className="flex flex-row items-center gap-2">
              <div className="rotate-90">{getBatteryIcon(data?.ds_bat)}</div>
              <p className="text-gray-500 font-semibold">{data?.ds_bat}%</p>
            </div>
            <div className="h-6 border border-gray-300"></div>

            <div
              className={`font-semibold w-2 h-2 rounded-full ${
                data?.ds_remoteCollect === 1 ? "bg-green-400" : "bg-red-400"
              }`}
            ></div>
          </div>
        </div>
      </motion.li>
    </NavLink>
  );
};

export default MainBodyItem;
