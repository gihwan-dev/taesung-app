import { useDeviceInfo } from "../../../hooks";

const DeviceList = () => {
  const { data, isError, isLoading } = useDeviceInfo();
  if (isError || isLoading) {
    return null;
  }
  return (
    <ul className="px-12 flex flex-col gap-4 overflow-auto h-80">
      <label>기기 목록</label>
      {data.map((item) => {
        return (
          <li
            className="flex flex-col gap-3 py-2 border-b border-b-gray-300"
            key={`${item.di_idx}DeviceList`}
          >
            <p>장비명</p>
            <p>{item.di_name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DeviceList;
