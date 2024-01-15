import { useState } from "react";
import SignUpSuccess from "./SignUpSuccess";
import { API_URL } from "src/const";
const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputIsEmpty = () => {
    return (
      form.email === "" ||
      form.password === "" ||
      form.confirmPassword === "" ||
      form.name === ""
    );
  };

  const isValidForm = () => {
    if (inputIsEmpty()) {
      return false;
    }

    if (form.password !== form.confirmPassword) {
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidForm()) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name,
        }),
      });
      if (!res.ok) {
        alert("회원가입에 실패했습니다.");
        return;
      }
      setIsSuccess(true);
      return;
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.error(error);
      return;
    }
  };

  if (isSuccess) {
    return <SignUpSuccess />;
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
        name="name"
        type="text"
        placeholder="이름"
        onChange={onChange}
      />
      <input
        className="px-2 py-4 border border-gray-300 rounded-md mb-4"
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
      />
      <input
        className="px-2 py-4 border border-gray-300 rounded-md mb-4"
        name="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        onChange={onChange}
      />
      <button
        className={`w-fll ${
          isValidForm() ? "bg-blue-500" : "bg-gray-300"
        } text-white font-bold text-lg py-3`}
        type="submit"
      >
        회원가입
      </button>
      <div className="flex flex-row justify-center items-center gap-8 text-gray-500">
        <a href="/login">로그인 {">"}</a>
      </div>
    </form>
  );
};

export default SignUpForm;
