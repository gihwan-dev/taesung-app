import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { useAlertSetting, useUpdateBat } from "../hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert, Slider } from "@mui/material";
import { motion } from "framer-motion";
import { inAndOut } from "src/utils/framer-motion.utils";

const EditBat = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [value, setValue] = useState(0);
  const [searchParams, _] = useSearchParams();
  const id = searchParams.get("id");

  const [success, setSuccess] = useState(false);

  const { mutate } = useUpdateBat();

  const navigate = useNavigate();

  const { data: alert, isLoading, isError, refetch } = useAlertSetting(id);

  useEffect(() => {
    if (alert) {
      setValue(alert.as_batSet);
    }
  }, [alert]);

  if (isLoading || isError) {
    return null;
  }

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
    circumference: 268,
    cutout: "93%",
    maintainAspectRatio: true,
    responsive: true,
  };

  const onSaveHandler = () => {
    mutate(
      {
        id: alert.as_idx,
        bat: value,
      },
      {
        onSuccess: () => {
          refetch();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
      }
    );
  };

  return (
    <div className="w-full relative border-t border-gray-300 pt-8 pb-8 flex flex-col gap-8 px-8">
      <h1 className="text-2xl font-bold text-center">알림 설정</h1>
      <h1 className="text-2xl font-bold text-center">배터리</h1>
      <div className="w-64 h-64">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-8">
          <Doughnut
            data={data}
            options={options}
          />
          <p className="absolute left-1/2 -translate-x-1/2 text-center font-bold top-1/2 text-4xl">
            {value}%
          </p>
        </div>
      </div>
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
      <div className="translate-y-4 w-full justify-between flex flex-row gap-4">
        <button
          onClick={() => navigate(`/main/setting/notification?id=${id}`)}
          className="bg-chart-inactive text-black font-bold w-full rounded-full py-4"
        >
          취소
        </button>
        <button
          onClick={onSaveHandler}
          className="bg-chart-active w-full text-white font-bold py-4 rounded-full"
        >
          저장
        </button>
      </div>
      {success && (
        <motion.div
          initial={inAndOut.initial}
          animate={inAndOut.animate}
          transition={inAndOut.transition}
          className="absolute top-20 w-full justify-center flex flex-row left-0"
        >
          <Alert severity="success">성공적으로 저장되었습니다.</Alert>
        </motion.div>
      )}
    </div>
  );
};

export default EditBat;
