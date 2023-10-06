import { useDeviceInfo } from "../hooks";
import MainBodyItem from "./MainBodyItem";

const MainBody = () => {
  const { data } = useDeviceInfo();
  return (
    <ul className="flex flex-col gap-4 h-full px-6 box-border">
      {data?.map((device) => {
        return (
          <MainBodyItem
            key={`${device.di_idx}bodyItem`}
            deviceId={device.di_idx}
            deviceName={device.di_name}
          />
        );
      })}
      <button className="py-2 px-4 border border-gray-300 w-fit self-center bg-white rounded-full">
        + 제품 추가하기
      </button>
    </ul>
  );
};

export default MainBody;
