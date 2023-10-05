import { useParams } from "react-router-dom";

const TopBanner = () => {
  const params = useParams();
  const id = Number(params.id);

  return <header></header>;
};

export default TopBanner;
