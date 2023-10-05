import React from "react";
import OdorLevelChart from "./OdorLevelChart.jsx";

const OdorLevel: React.FC<{
  sdMos: number;
  sdOu: number;
}> = ({ sdMos, sdOu }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <OdorLevelChart value={Number(sdMos.toFixed(0))} />
      <div className="w-9/12 bg-gray-200 text-center py-2 px-12 flex flex-row justify-between items-center rounded-full -translate-y-4">
        <p className="font-bold">복합악취</p>
        <p className="font-semibold">{sdOu}</p>
      </div>
    </div>
  );
};

export default OdorLevel;
