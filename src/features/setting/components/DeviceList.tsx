import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
} from "@mui/material";
import { useDeviceInfo } from "../../main/hooks";
import Edit from "@mui/icons-material/Edit";
import { useState } from "react";
import { useUpdateDeviceName } from "../hooks";

const DeviceList = () => {
  const { data, isError, isLoading, refetch } = useDeviceInfo();
  const [open, setOpen] = useState(false);

  const { mutate } = useUpdateDeviceName();

  const [selectedDeviceIdx, setSelectedDeviceIdx] = useState<number | null>(
    null
  );
  const [selectedDeviceName, setSelectedDeviceName] = useState<string>("");

  const clickHandler = (idx: number) => {
    setSelectedDeviceIdx(data[idx].di_idx);
    setSelectedDeviceName(data[idx].di_name);
    setOpen(true);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDeviceName(e.target.value);
  };

  const onSubmitHandler = () => {
    mutate(
      { id: selectedDeviceIdx, name: selectedDeviceName },
      {
        onSuccess: () => {
          setOpen(false);
          refetch();
        },
      }
    );
  };

  if (isError || isLoading) {
    return null;
  }
  return (
    <ul className="px-12 flex flex-col gap-4 overflow-auto h-80">
      <label className="text-lg font-bold">기기 목록</label>
      {data.map((item, index) => {
        return (
          <li
            className="flex flex-col gap-3 py-2 border-b border-b-gray-300"
            key={`${item.di_idx}DeviceList`}
          >
            <p className="font-semibold">장비명</p>
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm">{item.di_name}</p>
              <IconButton
                onClick={() => {
                  clickHandler(index);
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
            </div>
          </li>
        );
      })}
      <Dialog
        onClose={() => setOpen(false)}
        maxWidth={"xl"}
        fullWidth
        open={open}
      >
        <DialogTitle>기기명 변경</DialogTitle>
        <DialogContent>
          <Input
            defaultValue={selectedDeviceName}
            onChange={onChangeHandler}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color="error"
          >
            취소
          </Button>
          <Button onClick={onSubmitHandler}>확인</Button>
        </DialogActions>
      </Dialog>
    </ul>
  );
};

export default DeviceList;
