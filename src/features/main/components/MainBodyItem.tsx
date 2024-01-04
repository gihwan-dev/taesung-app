import React from "react";
import { useDeviceState } from "../hooks";
import { getBatteryIcon, getDeviceState } from "../utils/index";
import { NavLink } from "react-router-dom";

const MainBodyItem: React.FC<{
  deviceName: string;
  deviceId: string;
}> = ({ deviceId, deviceName }) => {
  const { data, isLoading } = useDeviceState(deviceId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <NavLink to={`${deviceId}`}>
      <li className="w-full flex flex-row items-center justify-evenly py-6 gap-6 bg-white px-4 rounded-lg shadow-lg box-border hover:scale-105">
        <div>{getDeviceState(data.ds_collect)}</div>
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-lg font-bold">{deviceName}</p>
          <div className="flex flex-row gap-4 justify-items-center">
            <p className="font-semibold">
              {data?.ds_door === 0 ? "문 닫힘" : "문 열림"}
            </p>
            <div className="flex flex-row items-center gap-2">
              <div className="rotate-90">{getBatteryIcon(data?.ds_bat)}</div>
              <p className="text-gray-500 font-semibold">{data?.ds_bat}%</p>
            </div>
            <p
              className={`font-semibold ${
                data?.ds_remoteCollect === 1 ? "text-green-400" : "text-red-400"
              }`}
            >
              {data?.ds_remoteCollect === 1 ? "포집가능" : "포집 불가"}
            </p>
          </div>
        </div>
      </li>
    </NavLink>
  );
};

export default MainBodyItem;
