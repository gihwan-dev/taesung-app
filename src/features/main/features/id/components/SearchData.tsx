import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";

import { useState } from "react";
import { useParams } from "react-router-dom";
import SensorDataList from "./SensorDataList";
import AlarmDataList from "./AlarmDataList";

const SearchData = () => {
  const params = useParams();
  const id = params.id as string;

  const [open, setOpen] = useState(false);

  const [searchFilter, setSearchFilter] = useState<"alarm" | "sensor">("alarm");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <section>
      <div className="px-4 flex flex-col gap-4 justify-start py-4 items-start">
        <button
          onClick={() => setOpen(true)}
          className="relative font-bold w-32 flex flex-row items-center justify-center border-2 border-black rounded-3xl py-1"
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
            <div className="fixed bottom-0 flex flex-col items-start left-0 -translate-x-1/ z-40 w-full h-32 px-6 py-6 bg-white rounded-t-3xl">
              <button
                onClick={() => setSearchFilter("alarm")}
                className={`flex flex-row items-center gap-2 ${
                  searchFilter === "alarm" ? "font-extrabold" : ""
                }`}
              >
                <span>알람 데이터</span>
                {searchFilter === "alarm" ? <CheckIcon /> : ""}
              </button>
              <button
                onClick={() => setSearchFilter("sensor")}
                className={`flex flex-row items-center gap-2 ${
                  searchFilter === "sensor" ? "font-extrabold" : ""
                }`}
              >
                <span>센서 데이터</span>
                {searchFilter === "sensor" ? <CheckIcon /> : ""}
              </button>
            </div>
          </>
        ) : null}
        <div className="flex flex-row gap-4">
          <h4 className="ml-2 font-bold">기간</h4>
          <div>
            <input
              onChange={(e) => setStartDate(new Date(e.target.value))}
              type="date"
            />
          </div>
          <div>
            <input
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
    </section>
  );
};

export default SearchData;
