import React from "react";

const NotificationBanner: React.FC<{
  value: number;
  onChange: (target: number) => void;
}> = ({ value, onChange }) => {
  return (
    <nav className="flex flex-row list-none justify-evenly w-full border-b border-b-gray-300 bg-white">
      <li
        onClick={() => onChange(1)}
        className={`py-4 ${
          value === 1 ? "border-b-2 border-b-black font-bold" : ""
        }`}
      >
        문열림
      </li>
      <li
        onClick={() => onChange(2)}
        className={`py-4 ${
          value === 2 ? "border-b-2 border-b-black font-bold" : ""
        }`}
      >
        복합악취 초과{" "}
      </li>
      <li
        onClick={() => onChange(3)}
        className={`py-4 ${
          value === 3 ? "border-b-2 border-b-black font-bold" : ""
        }`}
      >
        배터리 저전압
      </li>
      <li
        onClick={() => onChange(4)}
        className={`py-4 ${
          value === 4 ? "border-b-2 border-b-black font-bold" : ""
        }`}
      >
        포집 시작
      </li>
      <li
        onClick={() => onChange(5)}
        className={`py-4 ${
          value === 5 ? "border-b-2 border-b-black font-bold" : ""
        }`}
      >
        포집 완료
      </li>
    </nav>
  );
};

export default NotificationBanner;
