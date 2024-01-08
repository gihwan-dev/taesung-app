import { useParams } from "react-router-dom";
import { useDeviceState } from "../../../hooks";
import { useDeviceCollect, useUpdateCollect } from "../hooks";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { getBatteryIcon } from "../../../utils";
import { useEffect, useState } from "react";
import {
  getCollectStatusColor,
  getCollectStatusText,
} from "../utils/device.utils";
import { collectFetchType } from "../types";

const GatheringInfo = () => {
  const [remainTime, setRemainTime] = useState<number>(0);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const params = useParams();
  const id = params.id as string;

  const { mutate } = useUpdateCollect();

  const {
    data: state,
    isLoading: stateIsLoading,
    refetch: refetchState,
  } = useDeviceState(id as string);
  const {
    data: collect,
    isLoading: collectIsLoading,
    isError,
  } = useDeviceCollect(state?.ds_collect);

  const collectBtnHandler = (type: collectFetchType) => {
    mutate(
      { id: +id, type: type },
      {
        onSuccess: () => {
          refetchState();
        },
      }
    );
  };

  // 경과 시간 설정하는 로직
  useEffect(() => {
    if (stateIsLoading || collectIsLoading) {
      return;
    }
    if (state.ds_collect !== 1 && state.ds_collect !== 5) {
      const modifyDate = new Date(state?.mod_date);
      const curDate = new Date();
      const remainTime = curDate.getTime() - modifyDate.getTime();

      setRemainTime(remainTime);

      const timerValue = setInterval(() => {
        setRemainTime((prev) => prev + 1000);
      }, 1000);

      setTimer(timerValue);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  if (isError) {
    return null;
  }

  if (stateIsLoading || collectIsLoading) {
    return null;
  }

  // 시간이 0이 되면 refetch 하는 로직
  if (remainTime <= 0) {
    if (timer) {
      clearInterval(timer);
    }
    refetchState();
  }

  const restartButton = (
    <button
      onClick={() => collectBtnHandler("restart")}
      className="w-full py-3 rounded-xl bg-white bg-opacity-30 text-white flex flex-row items-center justify-center"
    >
      <PlayArrowIcon
        color="inherit"
        fontSize="large"
      />
      <span className="font-semibold">재시작</span>
    </button>
  );

  let content = <></>;

  // collect 상태에 따라 다른 컨텐츠를 보여주는 로직
  if (state?.ds_collect === 1) {
    content = (
      <>
        <p className="text-2xl font-bold text-white">
          {getCollectStatusText(state?.ds_remoteCollect)}
        </p>
        <button
          onClick={() => collectBtnHandler("start")}
          disabled={state?.ds_remoteCollect === 0}
          className={`${
            state?.ds_remoteCollect === 1
              ? "bg-white"
              : "bg-gray-400 text-gray-200"
          } w-full py-2 rounded-lg font-bold`}
        >
          <PlayArrowIcon />
          포집 시작
        </button>
      </>
    );
  } else if (state?.ds_collect !== 5) {
    const remainTimeObject = new Date(remainTime);
    const remainTimeHour = remainTimeObject.getHours();
    const remainTimeMinute = remainTimeObject.getMinutes();
    const remainTimeSecond = remainTimeObject.getSeconds();
    content = (
      <>
        <div className="flex flex-col gap-6 w-full items-center">
          {state.ds_stop === 1 ? (
            <p className="font-bold text-white text-xl">일시 정지</p>
          ) : (
            <p className="flex flex-row gap-2 items-end">
              <span className="relative text-xl font-bold text-white">
                {remainTimeHour}시간 {remainTimeMinute}분 {remainTimeSecond}초
                <span className="absolute whitespace-nowrap font-normal -right-10 bottom-0 text-xl text-white">
                  경과
                </span>
              </span>
            </p>
          )}
          {state.ds_stop === 1 ? (
            restartButton
          ) : (
            <button
              onClick={() => collectBtnHandler("stop")}
              className="w-full py-3 rounded-xl bg-white bg-opacity-30 text-white flex flex-row items-center justify-center"
            >
              <CropSquareIcon />
              <span className="font-semibold">일시 중지</span>
            </button>
          )}
        </div>
      </>
    );
  } else {
    content = (
      <div className="text-white w-full flex flex-col gap-4 items-center">
        <CheckCircleOutlineIcon
          fontSize="large"
          color="inherit"
          fontWeight={800}
        />
        <button
          onClick={() => collectBtnHandler("reset")}
          className="w-full py-3 rounded-xl bg-card-bg-error text-white flex flex-row items-center justify-center"
        >
          <CropSquareIcon />
          <span className="font-semibold">리셋</span>
        </button>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center gap-8 w-full h-full pt-20">
      <div
        className={`py-8 w-10/12 ${getCollectStatusColor(
          state?.ds_collect,
          state?.ds_remoteCollect
        )} flex flex-col items-center gap-4 rounded-2xl px-8`}
      >
        <p className="text-white font-bold text-3xl">{collect?.cc_name}</p>
        {content}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="w-12">
          <p className="font-bold">
            {state?.ds_door === 0 ? "문닫힘" : "문열림"}
          </p>
        </div>
        <div className="h-12 border border-gray300"></div>
        <div className="flex flex-row gap-2 w-12">
          <div className="rotate-90">{getBatteryIcon(state?.ds_bat)}</div>{" "}
          <div>{state?.ds_bat}%</div>
        </div>
      </div>
    </section>
  );
};

export default GatheringInfo;
