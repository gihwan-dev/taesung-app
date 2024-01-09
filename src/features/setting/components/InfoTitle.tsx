import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
} from "@mui/material";
import { useState } from "react";
import { useUpdateUserName } from "../hooks";

const InfoTitle = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(localStorage.getItem("name"));

  const [enteredName, setEnteredName] = useState<string>(name);

  const { mutate } = useUpdateUserName();

  const onOpenHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const onSubmitHandler = () => {
    const email = localStorage.getItem("email");
    mutate(
      { email, name: enteredName },
      {
        onSuccess: async (res) => {
          const data = (await res.json()) as any;
          localStorage.setItem("name", data.name);
          setName(data.name);
          setOpen(false);
        },
      }
    );
  };

  return (
    <div className="w-full py-20 flex flex-col items-start px-12 gap-8 flex-1">
      <div className="text-2xl font-bold text-gray-600 flex flex-row items-center gap-2 relative">
        <p>{name}</p>{" "}
        <IconButton
          onClick={onOpenHandler}
          className="absolute -bottom-1"
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
      <Dialog
        maxWidth="xl"
        fullWidth
        open={open}
        onClose={onCloseHandler}
      >
        <DialogTitle>계정 이름 변경</DialogTitle>
        <DialogContent>
          <Input
            defaultValue={enteredName}
            onChange={onChangeHandler}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={onCloseHandler}
          >
            취소
          </Button>
          <Button onClick={onSubmitHandler}>저장</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InfoTitle;
function useUpdateName(): { mutate: any } {
  throw new Error("Function not implemented.");
}
