const TopBanner: React.FC<{
  selected: number;
  onClick: (value: number) => void;
}> = ({ selected, onClick }) => {
  return (
    <header className="w-full flex flex-row justify-between items-center list-none border border-b-gray-300">
      <li
        className={
          `px-8 py-6 text-lg` +
          (selected === 0 ? " font-bold border-b-2 border-b-black" : "")
        }
        onClick={() => onClick(0)}
      >
        메인
      </li>
      <li
        className={
          `px-8 py-6 text-lg` +
          (selected === 1 ? " font-bold border-b-2 border-b-black" : "")
        }
        onClick={() => onClick(1)}
      >
        기기
      </li>
      <li
        className={
          `px-8 py-6 text-lg` +
          (selected === 2 ? " font-bold border-b-2 border-b-black" : "")
        }
        onClick={() => onClick(2)}
      >
        포집
      </li>
      <li
        className={
          `px-8 py-6 text-lg` +
          (selected === 3 ? " font-bold border-b-2 border-b-black" : "")
        }
        onClick={() => onClick(3)}
      >
        조회
      </li>
    </header>
  );
};

export default TopBanner;
