import { useParams } from "react-router-dom";
import { useDeviceInfo, useDeviceState } from "../../../hooks";
import { formatDateToKorean } from "../../../utils";

import { motion } from "framer-motion";
import { fadeIn } from "src/utils/framer-motion.utils";

const DeviceInfo = () => {
  const { data, isLoading } = useDeviceInfo();
  const params = useParams();
  const { data: state, isLoading: stateLoading } = useDeviceState(
    params.id as string
  );
  if (isLoading || stateLoading) {
    return null;
  }

  if (data === undefined) {
    return <h1>오류가 발생했습니다. 다시 시도해 주세요.</h1>;
  }

  const id = params.id;

  let device;

  for (let i = 0; i < data?.length; i++) {
    if (data[i].di_idx === Number(id)) {
      device = data[i];
    }
  }

  return (
    <motion.section
      {...fadeIn}
      className="pt-12 w-full h-full flex flex-col items-center bg-gray-100 gap-6"
    >
      <div className="bg-white w-5/12 aspect-square rounded-2xl flex justify-center items-center">
        <img
          src="../device-large.png"
          alt="device"
        />
      </div>
      <ul className="flex flex-col items-center w-7/12">
        <li className="flex flex-row border-b border-b-gray-200 py-4 justify-between w-full">
          <p className="font-bold">장비명</p>
          <p>{device.di_name}</p>
        </li>
        <li className="flex flex-row border-b border-b-gray-200 py-4 justify-between w-full">
          <p className="font-bold">수신상태</p>
          <div className="flex flex-row gap-3 items-center">
            수신중 <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>
        </li>
        <li className="flex flex-row border-b border-b-gray-200 py-4 justify-between w-full">
          <p className="font-bold">수신날짜</p>
          <p>{formatDateToKorean(state.mod_date)}</p>
        </li>
        <li className="flex flex-row border-b border-b-gray-200 py-4 justify-between w-full">
          <p className="font-bold">문열림 상태</p>
          <p>{state.ds_door === 0 ? "닫힘" : "열림"}</p>
        </li>
      </ul>
    </motion.section>
  );
};

export default DeviceInfo;
