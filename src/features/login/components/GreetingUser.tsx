import React from "react";

const GreetingUser: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-white flex flex-col items-center justify-center bg-gradient-to-bl from-teal-100 via-fuchsia-100 to-gray-100">
      <div className="flex flex-col gap-8 pb-24">
        <p className="text-lg text-gray-600">로그인 성공!</p>
        <div className="text-black font-bold text-2xl">
          <p>{name}님</p>
          <p>환영합니다!</p>
        </div>
      </div>
    </div>
  );
};

export default GreetingUser;
