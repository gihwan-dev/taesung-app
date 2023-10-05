import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SettingsIcon from "@mui/icons-material/Settings";
import Selection from "./Selection";
import { NavLink } from "react-router-dom";

const AppBar: React.FC<{
  returnArrow: boolean;
  selection: boolean;
  settings: boolean;
}> = ({ returnArrow, selection, settings }) => {
  return (
    <header className="flex flex-row justify-between items-center py-6 px-4 bg-gray-100">
      {returnArrow ? (
        <NavLink to="/main">
          <KeyboardBackspaceIcon />
        </NavLink>
      ) : (
        <div></div>
      )}
      {selection ? <Selection /> : <div></div>}
      {settings ? (
        <SettingsIcon
          fontSize="large"
          color="disabled"
        />
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default AppBar;
