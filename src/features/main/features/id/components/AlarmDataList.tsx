import { formatDateToKorean } from "../../../utils";
import { useDeviceAlarmData } from "../hooks";

export const AlarmDataList: React.FC<{
  id: string;
  startDate: Date | null;
  endDate: Date | null;
}> = ({ id, startDate = null, endDate = null }) => {
  const { data, isLoading } = useDeviceAlarmData(id);

  const getAlramType = (idx: number) => {
    switch (idx) {
      case 1:
        return "문 열림";
      case 2:
        return "복합악취 초과";
      case 3:
        return "배터리 저전압";
      case 4:
        return "포집 시작";
      case 5:
        return "포집 완료";
      default:
        return "알 수 없음";
    }
  };

  let content;

  if (!startDate || !endDate) {
    content = data?.map((item) => {
      return (
        <div
          className="w-full grid grid-cols-2"
          key={`${item.ac_idx}-alarm-data-list`}
        >
          <p className="text-center">{getAlramType(+item.ac_idx)}</p>
          <p className="text-center">{formatDateToKorean(item.reg_date)}</p>
        </div>
      );
    });
  } else {
    content = data?.map((item) => {
      const date = new Date(item.reg_date);
      if (date >= startDate && date <= endDate) {
        return (
          <div
            className="w-full grid grid-cols-2"
            key={`${item.ac_idx}-alarm-data-list`}
          >
            <p className="text-center">{getAlramType(+item.ac_idx)}</p>
            <p className="text-center">{formatDateToKorean(item.reg_date)}</p>
          </div>
        );
      }
    });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full grid grid-cols-2 list-none py-4 border border-gray-200">
        <li className="text-center font-semibold">알람 종류</li>
        <li className="text-center font-semibold">시간</li>
      </div>
      <div className="w-full bg-gray-100 py-4 flex flex-col gap-4 h-full overflow-y-scroll">
        {content}
      </div>
    </>
  );
};

export default AlarmDataList;
