import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";

const CollectSettingGraph: React.FC<{
  value: number;
  onAdd: () => void;
  onSub: () => void;
}> = ({ value, onAdd, onSub }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ["black", "#666666"],
        display: true,
        borderColor: "#D1D6DC",
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
    circumference: 260,
    cutout: "80%",
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="w-64 h-64">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-8">
        <Doughnut
          data={data}
          options={options}
        />
        <p className="absolute left-1/2 -translate-x-1/2 text-center font-bold top-1/2 text-4xl">
          {value}ou
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6 w-52 flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="whitespace-nowrap">낮음</p>
            <button
              onClick={onSub}
              className="w-8 h-8 flex justify-center items-center border border-gray-500 rounded-full font-bold"
            >
              -
            </button>
          </div>
          <div
            onClick={onAdd}
            className="flex flex-row items-center gap-2"
          >
            <button className="w-8 h-8 flex justify-center items-center border border-gray-500 rounded-full font-bold">
              +
            </button>
            <p>높음</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectSettingGraph;
