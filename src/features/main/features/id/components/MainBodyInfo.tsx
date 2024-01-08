import { useParams } from "react-router-dom";
import { useDeviceSensor } from "../hooks";
import { useDeviceState } from "../../../hooks";
import HeadBattery from "./HeadBattery";
import OdorLevel from "./OrdorLevel";
import OtherSensorData from "./OtherSensorData";

const MainBodyInfo = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data: sensor, isLoading: sensorLoading } = useDeviceSensor(id);
  const { data: state, isLoading: stateLoading } = useDeviceState("" + id);

  if (sensorLoading || stateLoading || !sensor) {
    return null;
  }

  return (
    <section className="flex flex-col h-full overflow-auto">
      <HeadBattery batteryLevel={state?.ds_bat} />
      <OdorLevel
        sdMos={sensor[0].sd_mos}
        sdOu={sensor[0].sd_ou}
      />
      <OtherSensorData />
    </section>
  );
};

export default MainBodyInfo;
