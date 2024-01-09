import AppBar from "src/components/AppBar";
import GoogleMap from "src/features/map/components/GoogleMap";
import { useDeviceInfo } from "src/features/main/hooks";
import MainBodyItem from "src/features/main/components/MainBodyItem";
import { useState } from "react";

const MapPage = () => {
  const { data, isLoading, isError } = useDeviceInfo();
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState<number | null>(
    null
  );

  const clickMarkerHandler = (index: number) => {
    setSelectedDeviceIndex(index);
  };

  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="w-full h-full overflow-hidden relative">
      <AppBar
        title="지도에서 보기"
        returnArrow
        selection={false}
      />
      <GoogleMap
        clickMarkerHandler={clickMarkerHandler}
        center={{
          lat: data[selectedDeviceIndex ?? 0].di_lat,
          lng: data[selectedDeviceIndex ?? 0].di_lng,
        }}
        deviceInfoList={data}
      />
      {typeof selectedDeviceIndex === "number" ? (
        <div className="absolute bottom-3 z-50 w-full px-6">
          <MainBodyItem
            deviceId={data[selectedDeviceIndex].di_idx}
            deviceName={data[selectedDeviceIndex].di_name}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
