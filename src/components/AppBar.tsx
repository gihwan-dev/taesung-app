import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SettingsIcon from "@mui/icons-material/Settings";

const AppBar: React.FC<{
  returnArrow: boolean;
  selection: boolean;
  settings: boolean;
}> = ({ returnArrow, selection, settings }) => {
  return (
    <header className="flex flex-row justify-between items-center py-6 px-4">
      {returnArrow ? <KeyboardBackspaceIcon /> : <div></div>}
      {selection ? <div>selection</div> : <div></div>}
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
