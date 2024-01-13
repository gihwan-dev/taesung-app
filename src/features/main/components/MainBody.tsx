import { Button } from "@mui/material";
import { useDeviceInfo } from "../hooks";
import MainBodyItem from "./MainBodyItem";
import { getToken } from "firebase/messaging";
import { API_URL } from "src/const";

const MainBody = () => {
  const { data } = useDeviceInfo();

  const handlerAllowNotification = () => {
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
  };

  return (
    <ul className="flex flex-col gap-4 h-full px-6 box-border">
      {data?.map((device) => {
        return (
          <MainBodyItem
            key={`${device.di_idx}bodyItem`}
            deviceId={device.di_idx}
            deviceName={device.di_name}
          />
        );
      })}
      <Button
        variant="contained"
        color="primary"
        className="mt-auto"
        onClick={handlerAllowNotification}
      >
        알림 허용하기
      </Button>
    </ul>
  );
};

export default MainBody;
