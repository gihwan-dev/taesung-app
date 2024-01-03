import { useSearchParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import SettingTopBanner from "../features/main/id/components/SettingTopBanner";
import { useState } from "react";
import AutoCollect from "../features/main/id/components/AutoCollect";
import AlertSetting from "../features/main/id/components/AlertSetting";

const SettingPage = () => {
  const [value, setValue] = useState(0);

  const onChangeHandler = (value: number) => {
    setValue(value);
  };

  return (
    <section className="w-full h-full">
      <AppBar
        returnArrow
        selection
      />
      <SettingTopBanner
        value={value}
        onChange={onChangeHandler}
      />
      {value === 0 ? <AutoCollect /> : <AlertSetting />}
    </section>
  );
};

export default SettingPage;
