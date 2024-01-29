import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { formatDateToKorean } from "../../utils";
import { useDeviceInfo } from "../../hooks";

const NotificationBody: React.FC<{
  data: any[];
}> = ({ data }) => {
  const [filter, setFilter] = useState(1);

  const { data: deviceList, isLoading } = useDeviceInfo();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (data.length === 0) {
    return (
      <div className="w-full h-full flex justify-center pt-12 overflow-auto">
        <h1>데이터가 존재하지 않습니다.</h1>
      </div>
    );
  }

  const onSelectionChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(Number(e.target.value));
  };

  const filteredData = data.filter((item) => item.di_idx === filter);

  return (
    <>
      <div className="py-4 w-full flex flex-row flex-wrap justify-center">
        <select
          className="border-b py-3 rounded-md"
          defaultValue={deviceList[0].di_idx ?? 1}
          onChange={onSelectionChange}
        >
          {deviceList?.map((device) => {
            return (
              <option
                value={device.di_idx}
                key={device.di_idx + "-notification-selection"}
              >
                {device.di_name}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="px-3">
        {filteredData.map((item) => {
          return (
            <li
              className="flex flex-row p-3 rounded-xl bg-white border border-gray-300 items-center justify-between"
              key={`${item.reg_date}${item.ad_idx}`}
            >
              <p className="font-semibold text-sm">기기번호: {item.di_idx}</p>
              <p className="text-gray-600 text-xs">
                {formatDateToKorean(item.reg_date)}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NotificationBody;
