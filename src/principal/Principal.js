// import { useAuth } from "../auth";
import "../stylesPrincipal/Principal.css";
import Titulo from "../components/Titulo";
import Avatar from "./Avatar.js";

const Principal = () => {
  //const auth = useAuth();
  return (
    <div className="principlaCont">
      <Titulo />
      <Avatar />
    </div>
  );
};

export default Principal;