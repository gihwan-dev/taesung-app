import { NavLink, useSearchParams } from "react-router-dom";
import { useAlertSetting } from "../hooks";
import { Switch } from "@mui/material";
import AppBar from "src/components/AppBar";

const AlertSetting = () => {
  const [searchParams, _] = useSearchParams();

  const id = searchParams.get("id");

  const { data, isError, isLoading } = useAlertSetting(id);

  if (isLoading || isError) {
    return null;
  }
  // git 테스트용 주속
  return (
    <div className="w-full flex flex-col  bg-gray-100 h-full">
      <AppBar
        returnArrow
        selection={true}
      />
      <div className="flex flex-col px-12 py-16 justify-center items-center gap-8 border-b-2 border-b-gray-300">
        <NavLink
          className="flex w-7/12 justify-center flex-row gap-4 py-4 px-4 bg-white border border-black rounded-lg items-center"
          to={{
            pathname: "/main/setting/notification/ou",
            search: `?id=${id}`,
          }}
        >
          <p className="text-lg font-bold">복합악취</p>
          <div className="flex flex-row gap-2">
            <p className="font-bold">{data?.as_ouSet}OU</p>
            <p className="font-bold">{">"}</p>
          </div>
        </NavLink>
        <NavLink
          to={{
            pathname: "/main/setting/notification/bat",
            search: `?id=${id}`,
          }}
          className="flex w-7/12 justify-center flex-row gap-4 py-4 px-4 bg-white border border-black rounded-lg items-center"
        >
          <p className="text-lg font-bold">배터리</p>
          <div className="flex flex-row gap-2">
            <p className="font-bold">{data?.as_batSet}%</p>
            <p className="font-bold">{">"}</p>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-col gap-4 py-4 px-8">
        <h1 className="font-bold text-lg">알림허용</h1>
        <ul className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl border border-gray-300 items-center">
            <label>포집알림</label>
            <Switch aria-label="toggle" />
          </div>
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl border border-gray-300 items-center">
            <label>희석배수 알림</label>
            <Switch aria-label="toggle" />
          </div>
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl border border-gray-300 items-center">
            <label>문열림 알림</label>
            <Switch aria-label="toggle" />
          </div>
          <div className="w-full flex flex-row justify-between px-2 py-2 bg-white rounded-xl border border-gray-300 items-center">
            <label>배터리 알림</label>
            <Switch aria-label="toggle" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AlertSetting;
