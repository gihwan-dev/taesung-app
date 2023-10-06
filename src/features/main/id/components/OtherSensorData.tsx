import { useParams } from "react-router-dom";
import { useWeather } from "../hooks";
import NavigationIcon from "@mui/icons-material/Navigation";

const OtherSensorData = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data, isLoading, isError } = useWeather(id);

  if (!data || data.length === 0) {
    return <h1 className="text-center">수집된 날씨 데이터가 없습니다.</h1>;
  }

  if (isError) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  function getWindDirection(degree: number) {
    if (degree >= 337.5 || degree < 22.5) {
      return "북";
    } else if (degree >= 22.5 && degree < 67.5) {
      return "북동";
    } else if (degree >= 67.5 && degree < 112.5) {
      return "동";
    } else if (degree >= 112.5 && degree < 157.5) {
      return "남동";
    } else if (degree >= 157.5 && degree < 202.5) {
      return "남";
    } else if (degree >= 202.5 && degree < 247.5) {
      return "남서";
    } else if (degree >= 247.5 && degree < 292.5) {
      return "서";
    } else if (degree >= 292.5 && degree < 337.5) {
      return "북서";
    }
  }

  return (
    <ul className="self-center w-9/12 flex flex-col items-center gap-8">
      <li className="flex flex-row justify-between w-full px-16">
        <p className="font-bold">온도</p>
        <p>{data.wd_temp} ℃</p>
      </li>
      <li className="flex flex-row justify-between w-full px-16">
        <p className="font-bold">습도</p>
        <p>{data.wd_humi} %</p>
      </li>
      <li className="flex flex-row justify-between w-full px-16">
        <p className="font-bold">풍향</p>
        <div className="flex gap-2 flex-row translate-x-4">
          <p>{getWindDirection(data.wd_wdd)}</p>
          <div
            style={{
              rotate: `${data.wd_wdd}deg`,
            }}
          >
            <NavigationIcon />
          </div>
        </div>
      </li>
      <li className="flex flex-row justify-between w-full px-16">
        <p className="font-bold">풍속</p>
        <p>{data.wd_wds} m/s</p>
      </li>
    </ul>
  );
};

export default OtherSensorData;
