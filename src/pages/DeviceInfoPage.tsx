import { useState } from "react";
import AppBar from "../components/AppBar";
import TopBanner from "../features/main/features/id/components/TobBanner";
import MainBodyInfo from "../features/main/features/id/components/MainBodyInfo";
import DeviceInfo from "../features/main/features/id/components/DeviceInfo";
import GatheringInfo from "../features/main/features/id/components/GatheringInfo";
import SearchData from "../features/main/features/id/components/SearchData";

const DeviceInfoPage = () => {
  const [selected, setSelected] = useState(0);

  const onClickHandler = (value: number) => {
    setSelected(value);
  };

  let content = <></>;

  if (selected === 0) {
    content = <MainBodyInfo />;
  } else if (selected === 1) {
    content = <DeviceInfo />;
  } else if (selected === 2) {
    content = <GatheringInfo />;
  } else {
    content = <SearchData />;
  }

  return (
    <section className="w-full h-full pb-8 flex flex-col overflow-hidden">
      <AppBar
        returnArrow
        selection
      />
      <TopBanner
        selected={selected}
        onClick={onClickHandler}
      />
      {content}
    </section>
  );
};

export default DeviceInfoPage;
