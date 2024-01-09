import { Link } from "react-router-dom";
import RightArrowIcon from "@mui/icons-material/ArrowForwardIos";

const linkStyle = "py-3 w-full flex flex-row justify-between items-center";
const SettingMainBody = () => {
  return (
    <div className="w-full h-full px-8 flex flex-col gap-2 py-8 border-t border-gray-300">
      <Link
        className={linkStyle}
        to="/main/setting/info"
      >
        <span>계정 설정</span>
        <RightArrowIcon />
      </Link>
      <hr />
      <Link
        className={linkStyle}
        to="/main/setting/notification?id=1"
      >
        <span>알림 설정</span>
        <RightArrowIcon />
      </Link>
      <hr />
      <Link
        className={linkStyle}
        to="/main/setting/collect?id=1"
      >
        <span>자동포집 설정</span>
        <RightArrowIcon />
      </Link>
      <hr />
    </div>
  );
};

export default SettingMainBody;
