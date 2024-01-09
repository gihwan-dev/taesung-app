import { useMutation } from "@tanstack/react-query";
import { updateDeviceName, updateUserName } from "../api";

export const useUpdateDeviceName = () => {
  return useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      updateDeviceName(id, name),
    mutationKey: ["device", "name"],
  });
};

export const useUpdateUserName = () => {
  return useMutation({
    mutationFn: ({ email, name }: { email: string; name: string }) =>
      updateUserName(email, name),
    mutationKey: ["user", "name"],
  });
};
