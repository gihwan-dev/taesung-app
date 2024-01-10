import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import { verticalSliding } from "src/utils/framer-motion.utils";
import { useNavigate, useSearchParams } from "react-router-dom";

const SelectionList: React.FC<{
  setOpen: (value: boolean) => void;
  data: any[];
  id: number;
}> = ({ setOpen, data, id }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchStr = searchParams.get("id");

  const navigate = useNavigate();

  const listClickHandler = (id: number) => {
    if (searchStr) {
      searchParams.set("id", String(id));
      setSearchParams(searchParams);
    } else {
      navigate(`/main/${id}`);
    }
    setOpen(false);
  };

  return (
    <motion.div
      {...verticalSliding}
      className="absolute w-full h-1/4 bottom-0 left-0 list-none bg-white z-50 text-black font-semibold py-6 px-4 rounded-t-3xl flex flex-col gap-4"
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute z-50 text-white -top-10 right-4"
      >
        <CloseIcon
          fontSize="large"
          color="inherit"
        />
      </button>
      <h3 className="text-lg font-extrabold">
        모니터링 시스템을 선택해 주세요.
      </h3>
      <ul className="flex flex-col gap-3 overflow-auto">
        {data?.map((item) => {
          return (
            <li
              className={`flex flex-row items-center gap-4 ${
                item.di_idx === id ? "font-extrabold" : ""
              }`}
              key={`${item.di_idx}${item.di_name}${id}`}
              onClick={() => listClickHandler(item.di_idx)}
            >
              {item.di_name}
              {item.di_idx === id ? <CheckIcon /> : ""}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SelectionList;
