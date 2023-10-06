import EditIcon from "@mui/icons-material/Edit";
import PhotoIcon from "@mui/icons-material/Photo";

const InfoTitle = () => {
  const name = localStorage.getItem("name");
  return (
    <div className="w-full py-20 flex flex-col items-center gap-8 flex-1">
      <div className="w-32 h-32 bg-gray-300 rounded-full relative border-2 border-gray-400">
        <PhotoIcon
          fontSize="large"
          color="action"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        ></PhotoIcon>
      </div>
      <div className="text-2xl font-bold text-gray-600 flex flex-row items-center gap-2 relative">
        <p>{name}</p> <EditIcon className="absolute -right-6" />
      </div>
    </div>
  );
};

export default InfoTitle;
