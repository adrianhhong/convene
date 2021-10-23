import "./Map.less";
import { useState } from "react";
import ReactMapGL, {
  Source,
  Layer,
  Marker,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import * as turf from "@turf/turf";
import { Button } from "antd";

type TempMarker = {
  name: string;
  longitude: number;
  latitude: number;
};

type LayerType =
  | "fill"
  | "line"
  | "symbol"
  | "circle"
  | "fill-extrusion"
  | "raster"
  | "background"
  | "heatmap"
  | "hillshade"
  | "sky"
  | "custom";

const circleFillStyle = {
  id: "circle-fill",
  type: "fill" as LayerType,
  paint: {
    "fill-color": "black",
    "fill-opacity": 0.05,
  },
};

const circleOutlineStyle = {
  id: "circle-outline",
  type: "line" as LayerType,
  paint: {
    "line-color": "blue",
    "line-opacity": 0.1,
    "line-width": 3,
  },
};

const params = {
  country: "au",
};

const center = [145, -38];
const options = {
  steps: 999,
  units: "kilometers" as turf.Units,
};

export default function Map({ radius }: { radius: number }) {
  const [viewport, setViewport] = useState({
    latitude: -38,
    longitude: 145,
    zoom: 9,
  });
  const [markers, setMarkers] = useState<(TempMarker | null)[]>([]);
  const [tempMarker, setTempMarker] = useState<TempMarker | null>(null);

  const circle = turf.circle(center, radius, options);

  const onSelected = (viewport: any, item: any) => {
    setViewport(viewport);
    setTempMarker({
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1],
    });
  };

  const add = () => {
    setMarkers([...markers, tempMarker]);
    setTempMarker(null);
  };

  return (
    <>
      <Button color="primary" onClick={add}>
        Add
      </Button>
      <Geocoder
        className="geocoder"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onSelected={onSelected}
        viewport={viewport}
        hideOnSelect={true}
        value=""
        queryParams={params}
      />
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        width="100vw"
        height="100vh"
        onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      >
        <GeolocateControl className="geolocate" />
        <NavigationControl className="nav-control" />
        {tempMarker && (
          <Marker
            longitude={tempMarker.longitude}
            latitude={tempMarker.latitude}
          >
            <div className="marker temporary-marker">
              <span></span>
            </div>
          </Marker>
        )}
        <Marker latitude={-38} longitude={145}>
          <div className="marker temporary-marker">
            <span></span>
          </div>
        </Marker>
        <Source id="circle-fill" type="geojson" data={circle}>
          <Layer {...circleFillStyle} />
        </Source>
        <Source id="circle-outline" type="geojson" data={circle}>
          <Layer {...circleOutlineStyle} />
        </Source>
      </ReactMapGL>
    </>
  );
}
