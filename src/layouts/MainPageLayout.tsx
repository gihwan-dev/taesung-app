import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNotification } from "../features/main/notification/hooks";
import { useEffect } from "react";
import { socket } from "src/services/sockets.io";
import { useDeviceInfo } from "src/features/main/hooks";
import { useAppDispatch } from "src/hooks/redux.hooks";
import { setDeviceState } from "src/stores/device_state.slice";
import { setWeatherData } from "src/stores/weather_data.slice";
import { setSensorData } from "src/stores/sensor_data.slice";

const MainPageLayout = () => {
  const { data, isLoading, isError, refetch } = useNotification();
  const { data: deviceInfo, isLoading: infoIsLoading } = useDeviceInfo();

  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on("notification", () => {
      refetch();
    });
  }, [refetch]);

  useEffect(() => {
    if (infoIsLoading) {
      return;
    }

    const eventListeners = [];

    deviceInfo?.forEach((item) => {
      const deviceStateListener = (data) => {
        dispatch(setDeviceState(data));
      };

      const weatherDataListener = (data) => {
        dispatch(setWeatherData(data));
      };

      const sensorDataListener = (data) => {
        dispatch(setSensorData(data));
      };

      socket.on(`device_state_${item.di_idx}`, deviceStateListener);
      socket.on(`weather_data_${item.di_idx}`, weatherDataListener);
      socket.on(`sensor_data_${item.di_idx}`, sensorDataListener);
      socket.emit("init", item.di_idx);

      eventListeners.push({
        event: `device_state_${item.di_idx}`,
        listener: deviceStateListener,
      });
      eventListeners.push({
        event: `weather_data_${item.di_idx}`,
        listener: weatherDataListener,
      });
      eventListeners.push({
        event: `sensor_data_${item.di_idx}`,
        listener: sensorDataListener,
      });
    });

    // 클린업 로직: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      eventListeners.forEach(({ event, listener }) => {
        socket.off(event, listener);
      });
    };
  }, [infoIsLoading, deviceInfo, dispatch]);

  if (isLoading || isError) {
    return null;
  }

  const notificationCount = data.filter((item) => item.al_checked === 0).length;

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
              <HomeIcon fontSize="medium" />
            ) : (
              <HomeIcon
                color="disabled"
                fontSize="medium"
              />
            )
          }
        </NavLink>
        <NavLink
          to="/main/map"
          end
        >
          {({ isActive }) =>
            isActive ? (
              <LocationOnIcon fontSize="medium" />
            ) : (
              <LocationOnIcon
                color="disabled"
                fontSize="medium"
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
                <NotificationsIcon fontSize="medium" />
              ) : (
                <NotificationsIcon
                  color="disabled"
                  fontSize="medium"
                />
              )
            }
          </NavLink>
          {data.length !== 0 && notificationCount !== 0 && (
            <div className="absolute -top-2 -right-4 bg-red-400 w-6 h-6 flex flex-col justify-center items-center text-white font-semibold rounded-full">
              {notificationCount}
            </div>
          )}
        </div>
        <NavLink
          to="/main/setting"
          end
        >
          {({ isActive }) =>
            isActive ? (
              <SettingsIcon fontSize="medium" />
            ) : (
              <SettingsIcon
                color="disabled"
                fontSize="medium"
              />
            )
          }
        </NavLink>
      </footer>
    </main>
  );
};

export default MainPageLayout;
