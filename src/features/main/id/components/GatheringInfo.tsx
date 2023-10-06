import { useParams } from "react-router-dom";
import { useDeviceState } from "../../hooks";
import { useDeviceCollect } from "../hooks";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { getBatteryIcon } from "../../utils";

const GatheringInfo = () => {
  const params = useParams();
  const id = params.id;
  const { data: state, isLoading: stateIsLoading } = useDeviceState(
    id as string
  );
  const {
    data: collect,
    isLoading: collectIsLoading,
    isError,
  } = useDeviceCollect(state?.ds_collect);

  if (isError) {
    return null;
  }

  if (stateIsLoading || collectIsLoading) {
    return null;
  }
  return (
    <section className="flex flex-col items-center gap-8 w-full h-full pt-20">
      <div
        className={`py-8 w-10/12 ${
          state?.ds_remoteCollect === 1 ? "bg-green-500" : "bg-red-500"
        } flex flex-col items-center gap-4 rounded-2xl px-8`}
      >
        <p className="text-white font-bold">{collect?.cc_name}</p>
        <p className="text-2xl font-bold text-white">
          {state?.ds_remoteCollect === 1 ? "포집가능" : "포집불가능"}
        </p>
        <button
          disabled={state?.ds_remoteCollect === 0}
          className={`${
            state?.ds_remoteCollect === 1
              ? "bg-white"
              : "bg-gray-400 text-gray-200"
          } w-full py-2 rounded-lg`}
        >
          <PlayArrowIcon />
          포집 시작
        </button>
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
