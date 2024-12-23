import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import DeviceList from "../features/setting/components/DeviceList";
import InfoTitle from "../features/setting/components/InfoTitle";

const MyInfoPage = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <section className="w-full h-full flex flex-col justify-between">
      <AppBar
        returnArrow
        title="계정"
        selection={false}
      />
      <hr />
      <InfoTitle />
      <DeviceList />
      <div className="w-full flex flex-row items-center justify-center gap-8 py-4">
        <p>태성환경연구소 CS</p>
        <p>052-247-8691</p>
      </div>
      <button
        onClick={onLogout}
        className="w-full bg-gray-100 py-3 font-bold border border-gray-300"
      >
        로그아웃
      </button>
      <button className="w-full bg-gray-100 py-3 text-red-500 font-bold border border-gray-300">
        회원탈퇴 및 서비스 해지
      </button>
    </section>
  );
};

export default MyInfoPage;
