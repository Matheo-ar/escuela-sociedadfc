import { NavLink, Route } from "react-router-dom";
import rutas from "./rutas";
import "../styles/BarraNavegacion.css";
import Logo from "./Logo.js";
import { useAuth } from "../auth";

const BarraNavegacion = () => {
  const auth = useAuth();

  return (
    <nav className="navbar">
      <Logo />
      <ul>
        {rutas.map((ruta) => {
          if (ruta.publicOnly && auth.user) return null;
          if (ruta.private && !auth.user) return null;
          if (!ruta.private && auth.user) return null;

          return (
            <li key={ruta.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#380191" : "white",
                })}
                className="item"
                to={ruta.to}
              >
                {ruta.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BarraNavegacion;
