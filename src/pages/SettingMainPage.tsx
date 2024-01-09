import AppBar from "src/components/AppBar";
import SettingMainBody from "src/features/setting/components/SettingMainBody";

const SettingMainPage = () => {
  return (
    <div className="w-full h-full">
      <AppBar
        title="설정"
        returnArrow
        selection={false}
      />
      <SettingMainBody />
    </div>
  );
};

export default SettingMainPage;
