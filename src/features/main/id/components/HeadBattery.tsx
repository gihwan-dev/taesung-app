import React from "react";
import { getBatteryIcon } from "../../utils";
import { useDeviceState } from "../../hooks";
import { useParams } from "react-router-dom";
import { useDeviceCollect } from "../hooks";

const HeadBattery: React.FC<{
  batteryLevel: number;
}> = ({ batteryLevel }) => {
  const params = useParams();
  const { data: state, isLoading: stateLoading } = useDeviceState(
    params.id as string
  );
  const {
    data: collectData,
    isLoading: collectLoading,
    isError,
  } = useDeviceCollect(state?.ds_collect);

  if (isError) {
    return null;
  }

  if (stateLoading || collectLoading) {
    return null;
  }

  return (
    <div className="w-ful pt-6 flex flex-row justify-center items-center gap-4">
      <p className="font-mono">{collectData?.cc_name}</p>
      <div className="h-12 border"></div>
      <div className="flex flex-row gap-2">
        <div className="w-fit rotate-90">{getBatteryIcon(batteryLevel)}</div>
        <p className="font-semibold">{batteryLevel}%</p>
      </div>
    </div>
  );
};

export default HeadBattery;
