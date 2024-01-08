import Marker from "src/assets/icon/ionicons/filled/Marker";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

import { key } from "src/api-key";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const GoogleMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <div className="h-full w-full">
      <Wrapper
        apiKey={key}
        render={render}
      >
        <Marker />
      </Wrapper>
    </div>
  );
};

export default GoogleMap;
