import { Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const MainPageLayout = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-between">
      <Outlet />
      <footer className="flex flex-row items-center justify-evenly py-6 border border-gray-200">
        <HomeIcon
          color="disabled"
          fontSize="large"
        />
        <div>
          <NotificationsIcon
            color="disabled"
            fontSize="large"
          />
        </div>
        <PersonIcon
          color="disabled"
          fontSize="large"
        />
      </footer>
    </main>
  );
};

export default MainPageLayout;
