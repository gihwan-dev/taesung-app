import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RootPage from "./pages/RootPage";
import MainPageLayout from "./layouts/MainPageLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotificationPage from "./pages/Notification";
import MyInfoPage from "./pages/MyInfoPage";
import DeviceInfoPage from "./pages/DeviceInfoPage";
import SettingPage from "./pages/SettingPage";
import EditPage from "./pages/EditPage";
import EditOu from "./features/main/id/components/EditOu";
import EditBat from "./features/main/id/components/EditBat";

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
      { path: "info", element: <MyInfoPage /> },
      {
        path: ":id",
        element: <DeviceInfoPage />,
      },
      {
        path: "setting",
        element: <SettingPage />,
      },
      {
        path: "edit",
        element: <EditPage />,
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
