import avatar from "../imagenes/avatar.jpg";
import "../stylesPrincipal/Avatar.css";
import InfoAvatar from "./InfoAvatar";

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" className="imgAvatar" />
      <InfoAvatar />
    </div>
  );
};

export default Avatar;
