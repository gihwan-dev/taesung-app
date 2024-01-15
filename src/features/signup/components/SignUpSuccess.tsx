import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const SignUpSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex flex-col gap-12 w-full items-center"
    >
      <div className="flex flex-col w-full items-center gap-4">
        <CheckCircleOutline
          sx={{
            color: "rgba(79, 167, 26, 1)",
          }}
          fontSize="large"
          color="inherit"
        />
        <p className="text-xl font-bold">회원가입 성공</p>
      </div>
    </motion.div>
  );
};

export default SignUpSuccess;
