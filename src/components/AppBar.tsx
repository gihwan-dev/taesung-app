import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Selection from "./Selection";
import { useNavigate } from "react-router-dom";

const AppBar: React.FC<{
  returnArrow: boolean;
  selection: boolean;
  title?: string;
}> = ({ returnArrow, selection, title }) => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between items-center py-6 px-4 bg-white">
      {returnArrow ? (
        <button onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon />
        </button>
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
