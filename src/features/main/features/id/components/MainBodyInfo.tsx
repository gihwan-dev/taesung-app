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
      className="flex h-full overflow-auto flex-col"
    >
      <HeadBattery batteryLevel={state?.ds_bat} />
      <div className="w-full h-80">
        <OdorLevel
          sdMos={sensor.sd_mos}
          sdOu={sensor.sd_ou}
        />
      </div>
      <OtherSensorData />
    </motion.section>
  );
};

export default MainBodyInfo;
