import { useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import RadiusSelect from "../../components/radiusSelect/RadiusSelect";
// import {
//   CustomPopup,
//   CustomMarker,
// } from "../../components/customPopup/CustomMarker";

export default function Main() {
  const { roomId }: { roomId: string } = useParams();
  const radiusList = [5, 10, 15, 20, 25];
  const [radius, setRadius] = useState<number>(radiusList[0]);

  const handleRadiusChange = (value: number) => {
    setRadius(value);
  };

  // const [selectedIndex, setSelectedIndex] = useState(null);

  // const handleOpenPopup = (index) => {
  //   setSelectedIndex(index);
  // };

  // const handleClosePopup = () => {
  //   setSelectedIndex(null);
  // };

  return (
    <>
      <Map radius={radius} />
      <RadiusSelect
        radius={radius}
        radiusList={radiusList}
        onRadiusChange={handleRadiusChange}
      />
      {/* {markers.map((marker, index) => {
        return (
          <CustomMarker
            key={`marker-${index}`}
            index={index}
            marker={marker}
            openPopup={handleOpenPopup}
          />
        );
      })} */}
      {/* {selectedIndex !== null && (
        <CustomPopup
          index={selectedIndex}
          marker={markers[selectedIndex]}
          closePopup={handleClosePopup}
        />
      )} */}
    </>
  );
}
