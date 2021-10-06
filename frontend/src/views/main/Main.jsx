import { useParams } from "react-router-dom";
import LoginDialog from "../../components/loginDialog/LoginDialog";

export default function Main() {
  const { roomId } = useParams();
  return (
    <>
      <h1>Convene</h1>
      <LoginDialog />
      <h1>we are {roomId} now</h1>
    </>
  );
}
