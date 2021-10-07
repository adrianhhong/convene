import "./Map.less";
import React, { useRef, useEffect, useState } from "react";
// import { Modal, Button } from "antd";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import * as turf from "@turf/turf";

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FiY3R4eG9vb210eHB5ZmNiIiwiYSI6ImNrdWcxNThqNjF6eGUyb3FqaG9wbWY3eDAifQ.odHvUpYeXf53A28sMsQUig";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(145);
  const [lat, setLat] = useState(-38);
  const [zoom, setZoom] = useState(9);
  const [radius, setRadius] = useState(5);

  const center = [145, -38];
  const options = {
    steps: 999,
    units: "kilometers",
    properties: { foo: "bar" },
  };
  const circle = turf.circle(center, radius, options);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      map.current.addLayer({
        id: "circle-fill",
        type: "fill",
        source: {
          type: "geojson",
          data: circle,
        },
        paint: {
          "fill-color": "black",
          "fill-opacity": 0.1,
        },
      });
      map.current.addLayer({
        id: "circle-outline",
        type: "line",
        source: {
          type: "geojson",
          data: circle,
        },
        paint: {
          "line-color": "blue",
          "line-opacity": 0.2,
          "line-width": 3,
        },
        layout: {},
      });
    });
  });

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}
