export type collectFetchType = "start" | "stop" | "reset" | "restart";

export type deviceAlertType = {
  ad_idx: number;
  di_idx: number;
  ac_idx: number;
  reg_date: string;
  al_checked: number;
};

export type UpdateAlarmDateFetchType = {
  type: "bat" | "door" | "ou" | "collect";
  id: string;
  value: 1 | 0;
};
