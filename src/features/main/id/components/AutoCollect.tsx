import { useEffect, useState } from "react";
import CollectSettingGraph from "./CollectSettingGraph";
import { useSearchParams } from "react-router-dom";
import { useDeviceSetting } from "../hooks";
import DeviceDelaySetting from "./DeviceDelaySetting";

const AutoCollect = () => {
  const [] = useState();
  const [searchParams, _] = useSearchParams();
  const [ouValue, setOuValue] = useState(0);
  const [delayValue, setDelayValue] = useState(0);
  const id = searchParams.get("id");

  const { data, isLoading, isError } = useDeviceSetting(id);

  useEffect(() => {
    if (!!data) {
      setOuValue(data.des_ouOver);
      setDelayValue(data.des_delayTime);
    }
  }, [data]);

  const onAddOuValueHandler = () => {
    setOuValue((prev) => prev + 1);
  };

  const onSubOuValueHandler = () => {
    setOuValue((prev) => prev - 1);
  };

  const onAddDelayValueHandler = () => {
    setDelayValue((prev) => prev + 1);
  };

  const onSubDelayValueHandler = () => {
    setDelayValue((prev) => prev - 1);
  };

  if (isLoading || isError) {
    return null;
  }

  if (!id) {
    return null;
  }

  return (
    <div className="w-full h-full bg-gray-100 px-8 flex flex-col ">
      <h1 className="py-8 text-center font-bold text-lg">복합악취</h1>
      <CollectSettingGraph
        onAdd={onAddOuValueHandler}
        onSub={onSubOuValueHandler}
        value={ouValue}
      />
      <DeviceDelaySetting
        value={delayValue}
        onAdd={onAddDelayValueHandler}
        onSub={onSubDelayValueHandler}
      />
      <div className="w-full translate-y-20 flex flex-col gap-4">
        <button className="bg-black py-2 text-white font-bold">저장</button>
        <button className="bg-black py-2 text-white font-bold">작동</button>
      </div>
    </div>
  );
};

export default AutoCollect;
