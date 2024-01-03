import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SettingsIcon from "@mui/icons-material/Settings";
import Selection from "./Selection";
import { NavLink, useParams } from "react-router-dom";

const AppBar: React.FC<{
  returnArrow: boolean;
  selection: boolean;
  title?: string;
}> = ({ returnArrow, selection, title }) => {
  // const params = useParams();

  return (
    <header className="flex flex-row justify-between items-center py-6 px-4 bg-white">
      {returnArrow ? (
        <NavLink to="/main">
          <KeyboardBackspaceIcon />
        </NavLink>
      ) : (
        <div></div>
      )}
      {selection ? (
        <Selection />
      ) : (
        <div className="text-lg text-primary font-bold text-center">
          {title !== undefined ? title : ""}
        </div>
      )}
      <div></div>
    </header>
  );
};

export default AppBar;
