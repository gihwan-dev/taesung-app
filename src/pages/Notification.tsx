import { useState } from "react";
import NotificationBanner from "../features/main/notification/components/NotificationBanner";
import { useNotification } from "../features/main/notification/hooks";
import NotificationBody from "../features/main/notification/components/NotificationBody";

const NotificationPage = () => {
  const [value, setValue] = useState(1);

  const { data, isLoading, isError } = useNotification();

  if (isLoading || isError) {
    return null;
  }

  const onChange = (target: number) => {
    setValue(target);
  };

  return (
    <section className="h-full w-full overflow-hidden bg-gray-100">
      <div className="py-4 bg-gray-100">
        <h1 className="text-center text-lg">알림</h1>
      </div>
      <NotificationBanner
        value={value}
        onChange={onChange}
      />
      <NotificationBody
        data={data.filter((item) => {
          return item.ac_idx === value;
        })}
      />
    </section>
  );
};

export default NotificationPage;
