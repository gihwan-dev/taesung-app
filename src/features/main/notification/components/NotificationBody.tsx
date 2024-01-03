import React from "react";
import { formatDateToKorean } from "../../utils";

const NotificationBody: React.FC<{
  data: any[];
}> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="w-full h-full flex justify-center pt-12 overflow-auto">
        <h1>데이터가 존재하지 않습니다.</h1>
      </div>
    );
  }
  return (
    <ul className="p-12">
      {data.map((item) => {
        return (
          <li
            className="flex flex-row p-4 rounded-xl bg-white border border-gray-300 items-center justify-between"
            key={`${item.reg_date}${item.ad_idx}`}
          >
            <p className="font-semibold">기기번호: {item.di_idx}</p>
            <p className="text-gray-600">{formatDateToKorean(item.reg_date)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default NotificationBody;
