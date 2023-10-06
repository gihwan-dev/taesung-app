import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";

const EditPage = () => {
  return (
    <div className="w-full h-full">
      <AppBar
        returnArrow
        selection={false}
        settings={false}
      />
      <Outlet />
    </div>
  );
};

export default EditPage;
