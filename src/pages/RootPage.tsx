import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  });
  return null;
};

export default RootPage;
