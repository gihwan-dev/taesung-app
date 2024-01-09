import { Outlet } from "react-router-dom";
import AppBar from "src/components/AppBar";

const SettingRootPage = () => {
  return (
    <section className="w-full h-full">
      <Outlet />
    </section>
  );
};

export default SettingRootPage;
