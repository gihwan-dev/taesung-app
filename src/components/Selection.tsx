import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDeviceInfo } from "../features/main/hooks";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Selection = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const param = useParams();
  const { data } = useDeviceInfo();
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();

  const searchStr = searchParams.get("id");

  let id = Number(param.id);

  if (!id) {
    if (searchParams) {
      id = Number(searchStr);
    }
  }

  useEffect(() => {
    if (!id) {
      if (searchStr) {
        id = Number(searchStr);
      }
    }
  }, [id, searchStr]);

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

  const listClickHandler = (id: number) => {
    if (searchStr) {
      navigate(`/main/setting?id=${id}`);
    } else {
      navigate(`/main/${id}`);
    }
    setOpen(false);
  };

  return (
    <>
      <ul
        onClick={onClickHandler}
        className="bg-white text-primary font-semibold px-4 py-1 rounded-full border-2 border-primary"
      >
        <li>
          {selected} <ExpandMoreIcon />
        </li>
      </ul>
      {open ? (
        <React.Fragment>
          <div
            onClick={() => setOpen(false)}
            className="absolute z-10 top-0 left-0 w-screen h-screen bg-modal-backdrop"
          ></div>

          <div className="absolute w-full h-1/4 bottom-0 left-1/2 -translate-x-1/2 list-none bg-white z-50 text-black font-semibold py-2 px-4 rounded-t-3xl flex flex-col gap-4">
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
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </>
  );
};

export default Selection;
