import { useState } from "react";
import { API_URL } from "../../../const";
import { useNavigate } from "react-router-dom";
import GreetingUser from "./GreetingUser";
import LoadingState from "../../../components/LoadingState";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [userName, setUserName] = useState("");

  const isValidForm = () => {
    return form.email !== "" && form.password !== "";
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidForm()) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
        }),
      });
      if (!response.ok) {
        throw new Error("로그인에 실패했습니다.");
      }
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.name);
      setUserName(data.user.name);
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        navigate("/main");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        setIsLoading(false);
        return;
      }
      alert("알 수 없는 에러가 발생했습니다.");
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isSuccess) {
    return <GreetingUser name={userName} />;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col gap-2"
    >
      <input
        className="px-2 py-4 border border-gray-300 rounded-md mb-4"
        name="email"
        type="text"
        placeholder="이메일"
        onChange={onChange}
      />
      <input
        className="px-2 py-4 border border-gray-300 rounded-md mb-4"
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
      />
      <button
        className={`w-fll ${
          isValidForm() ? "bg-blue-500" : "bg-gray-300"
        } text-white font-bold text-lg py-3`}
        type="submit"
      >
        로그인
      </button>
      <div className="flex flex-row justify-center items-center gap-8 text-gray-500">
        <a href="/signUp">회원가입 {">"}</a>
        <a href="/findPassword">비밀번호 찾기 {">"}</a>
      </div>
    </form>
  );
};

export default LoginForm;
