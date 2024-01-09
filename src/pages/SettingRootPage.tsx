import { Outlet } from "react-router-dom";

const SettingRootPage = () => {
  return (
    <section className="w-full h-full overflow-hidden">
      <Outlet />
    </section>
  );
};

export default SettingRootPage;
