import { useParams, useSearchParams } from "react-router-dom";
import { useDeviceInfo } from "../features/main/hooks";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "src/utils/framer-motion.utils";

import SelectionList from "./SelectionList";

const Selection = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const param = useParams();
  const { data } = useDeviceInfo();

  const [id, setId] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchStr = searchParams.get("id");

  useEffect(() => {
    if (!param.id) {
      if (searchStr) {
        setId(Number(searchStr));
      }
    } else {
      setId(Number(param.id));
    }
  }, [id, searchStr, param.id]);

  useEffect(() => {
    data?.forEach((item) => {
      if (Number(item?.di_idx) === id) {
        setSelected(item?.di_name);
      }
    });
  }, [data, id, searchStr]);

  const onClickHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      <ul
        onClick={onClickHandler}
        className="bg-white text-primary font-semibold px-4 py-1 rounded-full border-2 border-primary"
      >
        <li>
          {selected} <ExpandMoreIcon />
        </li>
      </ul>
      {open && (
        <>
          <motion.div
            {...fadeIn}
            onClick={() => setOpen(false)}
            className="absolute z-10 top-0 left-0 w-screen h-screen bg-modal-backdrop"
          ></motion.div>

          <SelectionList
            setOpen={setOpen}
            data={data}
            id={id}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Selection;
