import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Alert, Slider } from "@mui/material";

const CollectSettingGraph: React.FC<{
  value: number;
  setValue: (value: number) => void;
}> = ({ value, setValue }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ["#072958", "#D9D9D9"],
        display: true,
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: -129,
    circumference: 258,
    cutout: "93%",
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="relative w-full h-72">
      <div className="absolute gap-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <Doughnut
          data={data}
          options={options}
        />
        <p className="absolute left-1/2 -translate-x-1/2 text-center font-bold -translate-y-1/2 top-1/2 text-4xl">
          {value}ou
        </p>
        <div className="flex flex-row items-center justify-between gap-3">
          <span className="font-bold">0</span>
          <Slider
            sx={{
              color: "#072958",
            }}
            min={0}
            onChange={(_, value) => setValue(value as number)}
            value={value}
            max={100}
          />
          <span className="font-bold">100</span>
        </div>
      </div>
    </div>
  );
};

export default CollectSettingGraph;
