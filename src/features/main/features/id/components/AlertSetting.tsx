import { Outlet } from "react-router-dom";
import AppBar from "src/components/AppBar";

const AlertSetting = () => {
  return (
    <div className="w-full flex flex-col h-full">
      <AppBar
        returnArrow
        selection={true}
      />
      <hr />
      <Outlet />
    </div>
  );
};

export default AlertSetting;
