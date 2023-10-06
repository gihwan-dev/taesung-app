import { useAllSensor } from "../hooks";
import { formatDateToKorean } from "../../utils";

const SearchData = () => {
  const { data, isLoading } = useAllSensor();

  if (isLoading) {
    return null;
  }

  return (
    <section>
      <div className="px-4 flex flex-row justify-center py-8 bg-gray-100 items-center">
        <select className="border border-black h-fit">
          <option value="sensor">센서데이터</option>
        </select>
      </div>
      <div className="w-full grid grid-cols-4 list-none py-4 border-b border-b-gray-200">
        <li className="text-center font-semibold">기기번호</li>
        <li className="text-center font-semibold">OU</li>
        <li className="text-center font-semibold">MOS</li>
        <li className="text-center font-semibold">날짜</li>
      </div>
      <div className="w-full bg-gray-100 py-4 flex flex-col gap-4">
        {data?.map((item) => {
          return (
            <div
              key={`${item.reg_date}${item.di_idx}${item.sd_ou}`}
              className="w-full grid grid-cols-4"
            >
              <p className="text-center">{item.di_idx}</p>
              <p className="text-center">{item.sd_ou}</p>
              <p className="text-center">{item.sd_mos}</p>
              <p className="text-center text-xs">
                {formatDateToKorean(item.reg_date)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchData;
