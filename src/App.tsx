import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RootPage from "./pages/RootPage";
import MainPageLayout from "./layouts/MainPageLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotificationPage from "./pages/Notification";
import MyInfoPage from "./pages/MyInfoPage";
import DeviceInfoPage from "./pages/DeviceInfoPage";
import EditOu from "./features/main/features/id/components/EditOu";
import EditBat from "./features/main/features/id/components/EditBat";
import MapPage from "./pages/MapPage";
import SettingRootPage from "./pages/SettingRootPage";
import SettingMainPage from "./pages/SettingMainPage";
import AlertSetting from "./features/main/features/id/components/AlertSetting";
import AutoCollect from "./features/main/features/id/components/AutoCollect";
import AlertSettingMain from "./features/main/features/id/components/AlertSettingMain";
import { useEffect } from "react";
import { API_URL } from "./const";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase.js";
import { Provider } from "react-redux";
import store from "./stores/store";
import DeviceState from "./pages/DeviceState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "virtual",
    element: <DeviceState />,
  },
  {
    path: "main",
    element: <MainPageLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "notification", element: <NotificationPage /> },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: ":id",
        element: <DeviceInfoPage />,
      },
      {
        path: "setting",
        element: <SettingRootPage />,
        children: [
          {
            index: true,
            element: <SettingMainPage />,
          },
          {
            path: "notification",
            element: <AlertSetting />,
            children: [
              {
                index: true,
                element: <AlertSettingMain />,
              },
              {
                path: "ou",
                element: <EditOu />,
              },
              {
                path: "bat",
                element: <EditBat />,
              },
            ],
          },
          {
            path: "collect",
            element: <AutoCollect />,
          },
          { path: "info", element: <MyInfoPage /> },
        ],
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey:
            "BCXtbBSDudugWghHk9Jyk5HYf5prx26QvtLt65pesLYot17lTaw4HndWM6y6T1FQYR4BpGXkNG7a3T8mLlV1A7Q",
        }).then(async (currentToken) => {
          if (currentToken) {
            const res = await fetch(`${API_URL}/auth/token`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: currentToken,
              }),
            });
            const data = await res.json();
            console.log(data);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        });
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
