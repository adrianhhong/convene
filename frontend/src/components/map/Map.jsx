import "./Map.less";
import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Source, Layer, Marker } from "react-map-gl";

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

  return (
    <>
      <div className="sidebar">
        Longitude: {viewport.longitude} | Latitude: {viewport.latitude} | Zoom:
        {viewport.zoom} | Radius: {radius}
      </div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker latitude={-38} longitude={145}>
          <div>* You are here</div>
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
