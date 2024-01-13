import { useEffect, useState } from "react";
import CollectSettingGraph from "./CollectSettingGraph";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDeviceSetting, useUpdateMaxOu } from "../hooks";
import DeviceDelaySetting from "./DeviceDelaySetting";
import AppBar from "src/components/AppBar";
import { Alert } from "@mui/material";

import { motion } from "framer-motion";
import { inAndOut } from "src/utils/framer-motion.utils";

const AutoCollect = () => {
  const [searchParams, _] = useSearchParams();
  const [ouValue, setOuValue] = useState(0);
  const [delayValue, setDelayValue] = useState<number | "">("");
  const id = searchParams.get("id");

  const [success, setSuccess] = useState(false);

  const { data, isLoading, isError, refetch } = useDeviceSetting(id);

  const { mutate } = useUpdateMaxOu();

  const navigate = useNavigate();

  useEffect(() => {
    if (!!data) {
      setOuValue(data.des_ouOver);
      setDelayValue(data.des_delayTime);
    }
  }, [data]);

  const onAddDelayValueHandler = () => {
    setDelayValue((prev) => {
      if (prev === "") {
        return 1;
      }
      return prev + 1;
    });
  };

  const onSubDelayValueHandler = () => {
    setDelayValue((prev) => {
      if (prev === "") {
        return 0;
      }
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const onSubmitHandler = () => {
    mutate(
      {
        id: data.des_idx,
        maxOu: ouValue,
        delay: delayValue === "" ? 0 : delayValue,
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

  if (isLoading || isError) {
    return null;
  }

  if (!id) {
    return null;
  }

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <AppBar
        returnArrow
        selection
      />
      <div className="px-8 flex flex-col py-4 gap-8">
        <h1 className="text-center font-bold text-2xl">자동 포집 설정</h1>
        <h1 className="text-center font-bold text-2xl">복합악취</h1>
        <CollectSettingGraph
          setValue={setOuValue}
          value={ouValue}
        />
        <DeviceDelaySetting
          setValue={setDelayValue}
          value={delayValue}
          onAdd={onAddDelayValueHandler}
          onSub={onSubDelayValueHandler}
        />
        <div className="w-full translate-y-16 flex flex-row gap-4">
          <button
            onClick={() => navigate(`/main/setting`)}
            className="w-full py-2 bg-chart-inactive font-bold rounded-full"
          >
            취소
          </button>
          <button
            onClick={onSubmitHandler}
            className="w-full py-2 text-white bg-chart-active rounded-full font-bold"
          >
            저장
          </button>
        </div>
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

export default AutoCollect;
