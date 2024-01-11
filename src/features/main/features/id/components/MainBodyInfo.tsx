import { useParams } from "react-router-dom";
import HeadBattery from "./HeadBattery";
import OdorLevel from "./OrdorLevel";
import OtherSensorData from "./OtherSensorData";

import { motion } from "framer-motion";
import { fadeIn } from "src/utils/framer-motion.utils";
import { useAppSelector } from "src/hooks/redux.hooks";

const MainBodyInfo = () => {
  const params = useParams();
  const id = Number(params.id);

  const sensor = useAppSelector((state) => state.sensorDataState[id]);
  const state = useAppSelector((state) => state.deviceState[id]);

  if (!state || !sensor) {
    return null;
  }

  return (
    <motion.section
      {...fadeIn}
      className="flex flex-col h-full overflow-auto"
    >
      <HeadBattery batteryLevel={state?.ds_bat} />
      <OdorLevel
        sdMos={sensor.sd_mos}
        sdOu={sensor.sd_ou}
      />
      <OtherSensorData />
    </motion.section>
  );
};

export default MainBodyInfo;
