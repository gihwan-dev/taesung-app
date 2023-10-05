const MainTitle = () => {
  const name = localStorage.getItem("name");
  return (
    <div className="py-12 px-8">
      <h1 className="font-bold text-2xl text-gray-500">{name}</h1>
    </div>
  );
};

export default MainTitle;
