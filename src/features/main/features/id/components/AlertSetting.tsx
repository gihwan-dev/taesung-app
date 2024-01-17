import { Outlet } from "react-router-dom";
import AppBar from "src/components/AppBar";

const AlertSetting = () => {
  return (
    <div className="w-full flex h-full flex-col overflow-hidden">
      <AppBar
        returnArrow
        selection={true}
      />
      <hr />
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AlertSetting;
