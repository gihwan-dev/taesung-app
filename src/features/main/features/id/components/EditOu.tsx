import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useEffect, useState } from "react";
import { useAlertSetting } from "../hooks";
import { useSearchParams } from "react-router-dom";
const EditOu: React.FC<{}> = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [value, setValue] = useState(10);

  const [searchParams, _] = useSearchParams();
  const id = searchParams.get("id");

  const { data: alert, isLoading, isError } = useAlertSetting(id);

  useEffect(() => {
    if (alert) {
      setValue(alert.as_ouSet);
    }
  }, [alert]);

  if (isLoading || isError) {
    return null;
  }

  const onAdd = () => {
    setValue((prev) => prev + 1);
  };

  const onSub = () => {
    setValue((prev) => prev - 1);
  };

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
    <div className="w-full h-full bg-gray-100 pt-20 flex flex-col gap-8 px-8">
      <h1 className="text-3xl font-bold text-center">복합악취</h1>
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
      <div className="translate-y-12 flex flex-col gap-4">
        <button className="bg-black text-white font-bold py-4">저장</button>
        <button className="bg-black text-white font-bold py-4">알림</button>
      </div>
    </div>
  );
};

export default EditOu;
