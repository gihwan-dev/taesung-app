import { formatDateToKorean } from "../../../utils";
import { useDeviceSensor } from "../hooks";

const SensorDataList: React.FC<{
  id: string;
  startDate: Date | null;
  endDate: Date | null;
}> = ({ id, startDate, endDate }) => {
  const { data, isLoading } = useDeviceSensor(+id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  let content;

  if (!startDate || !endDate) {
    content = data?.map((item) => {
      return (
        <div
          key={`${item.reg_date}${item.di_idx}${item.sd_ou}`}
          className="w-full grid grid-cols-4"
        >
          <p className="text-center">{item.di_idx}</p>
          <p className="text-center">{item.sd_ou}</p>
          <p className="text-center">{item.sd_mos}</p>
          <p className="text-center text-xs my-1">
            {formatDateToKorean(item.reg_date)}
          </p>
        </div>
      );
    });
  } else {
    content = data?.map((item) => {
      const date = new Date(item.reg_date);
      if (date >= startDate && date <= endDate) {
        return (
          <div
            key={`${item.reg_date}${item.di_idx}${item.sd_ou}`}
            className="w-full grid grid-cols-4"
          >
            <p className="text-center">{item.di_idx}</p>
            <p className="text-center">{item.sd_ou}</p>
            <p className="text-center">{item.sd_mos}</p>
            <p className="text-center text-xs my-1">
              {formatDateToKorean(item.reg_date)}
            </p>
          </div>
        );
      }
    });
  }

  return (
    <>
      <div className="w-full grid grid-cols-4 list-none py-4 border border-gray-200">
        <li className="text-center font-semibold">기기번호</li>
        <li className="text-center font-semibold">OU</li>
        <li className="text-center font-semibold">MOS</li>
        <li className="text-center font-semibold">날짜</li>
      </div>
      <div className="w-full bg-gray-100 py-4 flex flex-col gap-4 h-full overflow-y-scroll">
        {content}
      </div>
    </>
  );
};

export default SensorDataList;
