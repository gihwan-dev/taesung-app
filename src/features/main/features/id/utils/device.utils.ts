export const getCollectStatusColor = (
  collectStatus: number | undefined,
  deviceRemoteCollect: number | undefined
) => {
  if (collectStatus === 1 && deviceRemoteCollect === 2) {
    return "bg-card-bg-error";
  }

  switch (collectStatus) {
    case 1:
      return "bg-card-bg-1";
    case 2:
      return "bg-card-bg-2";
    case 3:
      return "bg-card-bg-3";
    case 4:
      return "bg-card-bg-4";
    case 5:
      return "bg-card-bg-5";
    default:
      return "bg-card-bg-error";
  }
};

export const getCollectStatusText = (collectStatus: number | undefined) => {
  switch (collectStatus) {
    case 1:
      return "포집가능";
    case 2:
      return "포집불가";
    default:
      return "포집불가";
  }
};
