import React from "react";

const SettingTopBanner: React.FC<{
  value: number;
  onChange: (value: number) => void;
}> = ({ value, onChange }) => {
  return (
    <nav className="grid grid-cols-2 border-b border-b-gray">
      <div
        onClick={() => onChange(0)}
        className={`text-lg py-4 text-center ${
          value === 0 && "border-b-2 border-b-black font-bold"
        }`}
      >
        자동포집설정
      </div>
      <div
        onClick={() => onChange(1)}
        className={`text-lg py-4 text-center ${
          value === 1 && "border-b-2 border-b-black font-bold"
        }`}
      >
        알림설정
      </div>
    </nav>
  );
};

export default SettingTopBanner;
