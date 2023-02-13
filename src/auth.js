import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const iniciarSesion = ({ username }) => {
    setUser({ username });
    navigate("/principal");
  };

  const cerrarSesion = () => {
    setUser(null);
    navigate("/iniciar-sesion");
  };

  const auth = { user, iniciarSesion, cerrarSesion };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/iniciar-sesion" />;
  }

  return props.children;
};

export { AuthProvider, useAuth, AuthRoute };
