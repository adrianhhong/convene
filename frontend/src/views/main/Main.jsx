import { useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import RadiusSelect from "../../components/radiusSelect/RadiusSelect";

export default function Main() {
  const { roomId } = useParams();
  const radiusList = ["5", "10", "15", "20", "25"];
  const [radius, setRadius] = useState(radiusList[0]);

  const handleRadiusChange = (value) => {
    setRadius(value);
  };

  return (
    <>
      <Map radius={radius} />
      <RadiusSelect
        radius={radius}
        radiusList={radiusList}
        onRadiusChange={handleRadiusChange}
      />
    </>
  );
}
