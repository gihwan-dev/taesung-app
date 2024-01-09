import { Switch } from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import { useAlertSetting, useUpdateAlarmData } from "../hooks";
import ColorFilter from "src/assets/icon/ionicons/filled/ColorFilter";
import BatteryHalf from "src/assets/icon/ionicons/filled/BatteryHalf";
import RightArrowIcon from "@mui/icons-material/ArrowForwardIos";

const AlertSettingMain = () => {
  const [searchParams, _] = useSearchParams();

  const id = searchParams.get("id");

  const { data, isError, isLoading, refetch } = useAlertSetting(id);

  const { mutate } = useUpdateAlarmData();

  const collectChangeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? 1 : 0;
    mutate(
      { id: data.as_idx + "", type: "collect", value },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const ouChangeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? 1 : 0;
    mutate(
      { id: data.as_idx + "", type: "ou", value },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const doorChangeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? 1 : 0;
    mutate(
      { id: data.as_idx + "", type: "door", value },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const batChangeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? 1 : 0;
    mutate(
      { id: data.as_idx + "", type: "bat", value },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  if (isLoading || isError) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col px-12 py-12 justify-center items-center gap-8">
        <NavLink
          style={{
            width: "16.25rem",
          }}
          className="flex justify-between shadow-lg text-white flex-row rounded-full gap-4 p-3 bg-card-alert-bg border items-center"
          to={{
            pathname: "/main/setting/notification/ou",
            search: `?id=${id}`,
          }}
        >
          <div className="p-2 rounded-full bg-card-alert-circle">
            <ColorFilter />
          </div>
          <p className="font-semibold">복합악취</p>
          <div className="flex flex-row gap-2">
            <p className="font-bold text-lg">{data?.as_ouSet}OU</p>
            <RightArrowIcon />
          </div>
        </NavLink>
        <NavLink
          to={{
            pathname: "/main/setting/notification/bat",
            search: `?id=${id}`,
          }}
          style={{
            width: "16.25rem",
          }}
          className="flex justify-between text-white shadow-lg flex-row gap-4 p-3 bg-card-alert-bg rounded-full items-center"
        >
          <div className="p-2 rounded-full bg-card-alert-circle">
            <BatteryHalf />
          </div>
          <p className="font-semibold">배터리</p>
          <div className="flex flex-row gap-2">
            <p className="font-bold text-lg">{data?.as_batSet}%</p>
            <RightArrowIcon />
          </div>
        </NavLink>
      </div>
      <hr />
      <div className="flex flex-col gap-4 py-12 px-8">
        <h1 className="font-bold text-center text-lg">Push 알림 설정</h1>
        <ul className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl items-center">
            <label>포집알림</label>
            <Switch
              checked={data.as_collect === 1}
              onChange={collectChangeHandler}
              aria-label="toggle"
            />
          </div>
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl items-center">
            <label>복합악취 초과 알림</label>
            <Switch
              onChange={ouChangeHandler}
              checked={data.as_ou === 1}
              aria-label="toggle"
            />
          </div>
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl items-center">
            <label>문열림 알림</label>
            <Switch
              onChange={doorChangeHandler}
              checked={data.as_door === 1}
              aria-label="toggle"
            />
          </div>
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl items-center">
            <label>배터리 알림</label>
            <Switch
              onChange={batChangeHandler}
              checked={data.as_bat === 1}
              aria-label="toggle"
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default AlertSettingMain;
