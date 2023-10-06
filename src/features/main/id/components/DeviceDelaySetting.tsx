import React from "react";

const DeviceDelaySetting: React.FC<{
  value: number;
  onAdd: () => void;
  onSub: () => void;
}> = ({ value, onAdd, onSub }) => {
  return (
    <div
      className={
        "w-full flex flex-row justify-center items-center translate-y-12 gap-8"
      }
    >
      <button
        className="bg-black text-white px-3 text-2xl rounded-lg"
        onClick={onSub}
      >
        -
      </button>
      <div className="bg-white px-8 py-2 rounded-lg">{value}sec</div>
      <button
        className="bg-black text-white px-3 text-2xl rounded-lg"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
};

export default DeviceDelaySetting;
