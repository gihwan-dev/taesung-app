import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SettingsIcon from "@mui/icons-material/Settings";
import Selection from "./Selection";
import { NavLink, useParams } from "react-router-dom";

const AppBar: React.FC<{
  returnArrow: boolean;
  selection: boolean;
  settings: boolean;
  title?: string;
}> = ({ returnArrow, selection, settings, title }) => {
  const params = useParams();
  const id = params.id;

  return (
    <header className="flex flex-row justify-between items-center py-6 px-4 bg-gray-100">
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
        <div className="text-lg text-gray-700 font-bold text-center">
          {title !== undefined ? title : ""}
        </div>
      )}
      {settings ? (
        <NavLink
          to={{
            pathname: "/main/setting",
            search: `?id=${id}`,
          }}
        >
          <SettingsIcon
            fontSize="large"
            color="disabled"
          />
        </NavLink>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default AppBar;
