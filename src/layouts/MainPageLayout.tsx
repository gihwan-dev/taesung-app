import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNotification } from "../features/main/notification/hooks";

const MainPageLayout = () => {
  const { data, isLoading, isError } = useNotification();

  if (isLoading || isError) {
    return null;
  }

  console.log(data);

  return (
    <main className="w-screen h-screen flex flex-col box-border">
      <div className="overflow-scroll h-full">
        <Outlet />
      </div>
      <footer className="flex flex-shrink-0 flex-row items-center justify-evenly py-6 border border-gray-200">
        <NavLink
          to={"/main"}
          end
        >
          {({ isActive }) =>
            isActive ? (
              <HomeIcon fontSize="large" />
            ) : (
              <HomeIcon
                color="disabled"
                fontSize="large"
              />
            )
          }
        </NavLink>
        <NavLink
          to="/map"
          end
        >
          {({ isActive }) =>
            isActive ? (
              <LocationOnIcon fontSize="large" />
            ) : (
              <LocationOnIcon
                color="disabled"
                fontSize="large"
              />
            )
          }
        </NavLink>
        <div className="relative">
          <NavLink
            to="/main/notification"
            end
          >
            {({ isActive }) =>
              isActive ? (
                <NotificationsIcon fontSize="large" />
              ) : (
                <NotificationsIcon
                  color="disabled"
                  fontSize="large"
                />
              )
            }
          </NavLink>
          {data.length !== 0 && (
            <div className="absolute -top-2 -right-4 bg-red-400 w-6 h-6 flex flex-col justify-center items-center text-white font-semibold rounded-full">
              {data.filter((item) => item.al_checked === 0).length}
            </div>
          )}
        </div>
        <NavLink
          to="/setting"
          end
        >
          {({ isActive }) =>
            isActive ? (
              <SettingsIcon fontSize="large" />
            ) : (
              <SettingsIcon
                color="disabled"
                fontSize="large"
              />
            )
          }
        </NavLink>
      </footer>
    </main>
  );
};

export default MainPageLayout;
