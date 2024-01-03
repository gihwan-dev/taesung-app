import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import InfoIcon from "@mui/icons-material/Info";

const OdorLevelChart = ({ value }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const getColor = () => {
    switch (value) {
      case 0:
        return "#FF3B30";
      case 1:
        return "#FF3B30";
      case 2:
        return "#FF971C";
      case 3:
        return "#CCC300";
      case 4:
        return "#7EAA00";
      case 5:
        return "#00A410";
      default:
        return "#00A410";
    }
  };

  const data = {
    datasets: [
      {
        data: [value, 5 - value],
        backgroundColor: [getColor(), "#cccccc"],
        display: true,
        borderColor: "#D1D6DC",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: -90,
    circumference: 180,
    cutout: "60%",
    maintainAspectRatio: true,
    responsive: true,
  };

  const getLabel = () => {
    switch (value) {
      case 0:
        return "매우나쁨";
      case 1:
        return "매우나쁨";
      case 2:
        return "나쁨";
      case 3:
        return "보통";
      case 4:
        return "좋음";
      case 5:
        return "매우좋음";
      default:
        return "보통";
    }
  };

  return (
    <div className="relative w-64 h-64">
      <p className="absolute left-1/2 -translate-x-1/2 top-6 text-lg font-bold">
        악취 청정도
      </p>
      <Doughnut
        data={data}
        options={options}
      />
      <p
        style={{
          color: getColor(),
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-center font-bold"
      >
        {value} <br />
        {getLabel()}
      </p>
      <button>
        <InfoIcon
          color="info"
          fontSize="large"
          className="absolute bottom-14 -right-10"
        />
      </button>
    </div>
  );
};

export default OdorLevelChart;
