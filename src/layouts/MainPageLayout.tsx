import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { useNotification } from "../features/main/notification/hooks";

const MainPageLayout = () => {
  const { data, isLoading, isError } = useNotification();

  if (isLoading || isError) {
    return null;
  }

  return (
    <main className="w-screen h-screen flex flex-col box-border">
      <div className="flex-1 overflow-auto">
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
              {data.length}
            </div>
          )}
        </div>
        <NavLink
          to="/main/info"
          end
        >
          {({ isActive }) =>
            isActive ? (
              <PersonIcon fontSize="large" />
            ) : (
              <PersonIcon
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
