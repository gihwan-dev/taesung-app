const OrdorValue = [0, 5, 10, 15, 30, 100];
const OrdorText = ["매우좋음", "좋음", "보통", "나쁨", "매우나쁨"];
const OrdorInfoDialog: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  return (
    <>
      <div className="w-80 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 bg-dialog-bg">
        <div className="w-24 px-4"></div>
        <div></div>
        <button onClick={onClose}>닫기</button>
      </div>
      <div
        onClick={() => onClose()}
        className="w-screen h-screen fixed z-10 top-0 left-0"
      ></div>
    </>
  );
};

export default OrdorInfoDialog;
