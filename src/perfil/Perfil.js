import { useAuth } from "../auth";
import "../stylesPerfil/Perfil.css";

const Perfil = () => {
  const auth = useAuth();

  return (
    <div className="perfilContent">
      <div className="datosContent">
        <h1 className="tituloPerfil">Perfil</h1>
      </div>
    </div>
  );
};

export default Perfil;
