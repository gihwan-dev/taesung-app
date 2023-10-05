import Battery20Icon from "@mui/icons-material/Battery20";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery60Icon from "@mui/icons-material/Battery60";
import Battery80Icon from "@mui/icons-material/Battery80";
import Battery90Icon from "@mui/icons-material/Battery90";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

export const getBatteryIcon = (batteryLevel: number) => {
  if (batteryLevel === 100) {
    return <BatteryFullIcon color="action" />;
  }
  if (batteryLevel >= 90) {
    return <Battery90Icon color="action" />;
  }
  if (batteryLevel >= 80) {
    return <Battery80Icon color="action" />;
  }
  if (batteryLevel >= 60) {
    return <Battery60Icon color="action" />;
  }
  if (batteryLevel >= 50) {
    return <Battery50Icon color="action" />;
  }
  if (batteryLevel >= 30) {
    return <Battery30Icon color="action" />;
  }
  if (batteryLevel >= 20) {
    return <Battery20Icon color="action" />;
  }
};
