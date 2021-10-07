import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import RadiusSelect from "../../components/radiusSelect/RadiusSelect";

export default function Main() {
  const { roomId } = useParams();
  return (
    <>
      <Map />
      <RadiusSelect />
    </>
  );
}
