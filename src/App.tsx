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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
