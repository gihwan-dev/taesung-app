import { Outlet } from "react-router-dom";

const EditPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Outlet />
    </div>
  );
};

export default EditPage;
