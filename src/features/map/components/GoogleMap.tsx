import React, { useEffect } from "react";
import { key } from "src/api-key";
import {
  GoogleMap as GoogleMapApi,
  useJsApiLoader,
  Marker as GoogleMarker,
} from "@react-google-maps/api";

const GoogleMap: React.FC<{
  center: { lng: number; lat: number };
  deviceInfoList: any[];
  clickMarkerHandler: (index: number) => void;
}> = ({ center, deviceInfoList, clickMarkerHandler }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const [zoom, setZoom] = React.useState(11);

  useEffect(() => {
    setTimeout(() => {
      setZoom(15);
    }, 500);
  }, []);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMapApi
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerStyle={{ height: "90%", width: "100%" }}
    >
      {deviceInfoList?.map((item, index) => {
        return (
          <GoogleMarker
            onClick={() => clickMarkerHandler(index)}
            key={`${item.di_idx}-google-marker`}
            position={{ lat: item.di_lat, lng: item.di_lng }}
          />
        );
      })}
    </GoogleMapApi>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMap);
