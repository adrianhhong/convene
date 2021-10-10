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

export default function Map({ radius }) {
  const [viewport, setViewport] = useState({
    latitude: -38,
    longitude: 145,
    zoom: 9,
  });

  const circleFillStyle = {
    id: "circle-fill",
    type: "fill",
    paint: {
      "fill-color": "black",
      "fill-opacity": 0.05,
    },
  };

  const circleOutlineStyle = {
    id: "circle-outline",
    type: "line",
    paint: {
      "line-color": "blue",
      "line-opacity": 0.1,
      "line-width": 3,
    },
  };

  const center = [145, -38];
  const options = {
    steps: 999,
    units: "kilometers",
  };
  const circle = turf.circle(center, radius, options);

  const params = {
    country: "au",
  };

  const onSelected = (viewport, item) => {
    setViewport(viewport);
  };

  return (
    <>
      {/* <div className="sidebar">
        Longitude: {viewport.longitude} | Latitude: {viewport.latitude} | Zoom:
        {viewport.zoom} | Radius: {radius}
      </div> */}
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
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <GeolocateControl className="geolocate" />
        <NavigationControl className="nav-control" />
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
