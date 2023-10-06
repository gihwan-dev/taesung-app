import MainBody from "../features/main/components/MainBody";
import MainTitle from "../features/main/components/MainTitle";

const MainPage = () => {
  return (
    <section className="border-box w-full h-full bg-gray-100 overflow-hidden">
      <MainTitle />
      <MainBody />
    </section>
  );
};

export default MainPage;
