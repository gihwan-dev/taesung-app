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
    </ul>
  );
};

export default MainBody;
