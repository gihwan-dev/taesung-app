import AppBar from "src/components/AppBar";
import GoogleMap from "src/features/map/components/GoogleMap";

const MapPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <AppBar
        title="지도에서 보기"
        returnArrow
        selection={false}
      />
      <GoogleMap />
    </div>
  );
};

export default MapPage;
