import React from "react";

const DeviceDelaySetting: React.FC<{
  value: number;
  onAdd: () => void;
  onSub: () => void;
  setValue: (value: number) => void;
}> = ({ value, onAdd, onSub, setValue }) => {
  return (
    <div
      className={
        "w-full flex flex-row justify-center items-center translate-y-12"
      }
    >
      <button
        className="bg-chart-active text-white px-3 text-2xl rounded-lg"
        onClick={onSub}
      >
        -
      </button>
      <div className="bg-white px-8 py-2 rounded-lg flex flex-row items-center justify-center">
        <input
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-12 border-b border-gray-300 text-center"
          type="number"
          value={value}
        />
        <span>sec</span>
      </div>
      <button
        className="bg-chart-active text-white px-3 text-2xl rounded-lg"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
};

export default DeviceDelaySetting;
