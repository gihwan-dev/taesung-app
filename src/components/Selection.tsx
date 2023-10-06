import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDeviceInfo } from "../features/main/hooks";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        className="bg-slate-500 text-white font-semibold px-4 py-1 rounded-full"
      >
        <li>
          {selected} <ExpandMoreIcon />
        </li>
      </ul>
      {open ? (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 list-none bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg flex flex-col gap-2">
          {data?.map((item) => {
            return (
              <li
                key={`${item.di_idx}${item.di_name}${id}`}
                onClick={() => listClickHandler(item.di_idx)}
              >
                {item.di_name}
              </li>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Selection;
