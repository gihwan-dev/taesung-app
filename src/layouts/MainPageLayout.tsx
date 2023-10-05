import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const MainPageLayout = () => {
  return (
    <main className="w-screen h-screen flex flex-col overflow justify-between">
      <Outlet />
      <footer className="flex flex-row items-center justify-evenly py-6 border border-gray-200">
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
        <div>
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
