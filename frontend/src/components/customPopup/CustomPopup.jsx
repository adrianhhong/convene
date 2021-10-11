import { Marker, Popup } from "react-map-gl";

export function CustomPopup({ index, marker, closePopup }) {
  return (
    <Popup
      latitude={marker.latitude}
      longitude={marker.longitude}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offsetTop={-30}
    >
      <p>{marker.name}</p>
    </Popup>
  );
}

export function CustomMarker({ index, marker, openPopup }) {
  return (
    <Marker longitude={marker.longitude} latitude={marker.latitude}>
      <div className="marker" onClick={() => openPopup(index)}>
        <span>
          <b>{index + 1}</b>
        </span>
      </div>
    </Marker>
  );
}
