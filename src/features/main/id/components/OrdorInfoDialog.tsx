import InfoDialog from "src/assets/InfoDialog";
import Close from "@mui/icons-material/Close";

const OrdorInfoDialog: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 z-40 bg-card-bg-5 rounded-lg"
        style={{
          backgroundImage: `url(${InfoDialog})`,
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <InfoDialog />

        <Close
          color="inherit"
          onClick={() => {
            onClose();
          }}
          className="absolute right-0 top-0 text-white z-50"
        ></Close>
      </div>
      <div
        className="w-screen h-screen fixed top-0 left-0 z-30"
        onClick={() => {
          onClose();
        }}
      ></div>
    </>
  );
};

export default OrdorInfoDialog;
