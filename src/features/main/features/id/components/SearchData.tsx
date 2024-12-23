import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";

import { useState } from "react";
import { useParams } from "react-router-dom";
import SensorDataList from "./SensorDataList";
import AlarmDataList from "./AlarmDataList";

import { motion } from "framer-motion";
import { fadeIn, verticalSliding } from "src/utils/framer-motion.utils";

const SearchData = () => {
  const params = useParams();
  const id = params.id as string;

  const [open, setOpen] = useState(false);

  const [searchFilter, setSearchFilter] = useState<"alarm" | "sensor">("alarm");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <motion.section {...fadeIn}>
      <div className="px-4 flex flex-col gap-4 justify-start py-4 items-start">
        <button
          onClick={() => setOpen(true)}
          className="relative font-bold text-sm w-32 flex flex-row items-center justify-center border border-gray-300 rounded-md py-1"
        >
          <span>{searchFilter === "alarm" ? "알람데이터" : "센서데이터"}</span>
          <ArrowDropDownIcon className="absolute right-1" />
        </button>
        {open ? (
          <>
            <div
              onClick={() => setOpen(false)}
              className="fixed w-screen h-screen left-0 top-0 z-30 bg-modal-backdrop"
            ></div>
            <motion.div
              {...verticalSliding}
              className="fixed bottom-0 flex flex-col items-start left-0 -translate-x-1/ z-40 w-full h-32 px-6 py-6 bg-white rounded-t-3xl"
            >
              <button
                onClick={() => setSearchFilter("alarm")}
                className={`flex flex-row text-sm items-center gap-2 ${
                  searchFilter === "alarm" ? "font-bold" : ""
                }`}
              >
                <span>알람 데이터</span>
                {searchFilter === "alarm" ? <CheckIcon /> : ""}
              </button>
              <button
                onClick={() => setSearchFilter("sensor")}
                className={`flex flex-row text-sm items-center gap-2 ${
                  searchFilter === "sensor" ? "font-bold" : ""
                }`}
              >
                <span>센서 데이터</span>
                {searchFilter === "sensor" ? <CheckIcon /> : ""}
              </button>
            </motion.div>
          </>
        ) : null}
        <div className="flex flex-col gap-4">
          <h4 className="ml-2 font-semibold text-sm whitespace-pre-wrap">
            기간
          </h4>
          <div className="ml-2 w-full flex text-sm flex-row gap-2">
            <input
              className="flex-1 max-w-xs"
              onChange={(e) => setStartDate(new Date(e.target.value))}
              type="date"
            />
            <input
              className="flex-1 max-w-xs"
              onChange={(e) => setEndDate(new Date(e.target.value))}
              type="date"
            />
          </div>
        </div>
      </div>
      {searchFilter === "alarm" ? (
        <AlarmDataList
          startDate={startDate}
          endDate={endDate}
          id={id}
        />
      ) : (
        <SensorDataList
          startDate={startDate}
          endDate={endDate}
          id={id}
        />
      )}
    </motion.section>
  );
};

export default SearchData;
