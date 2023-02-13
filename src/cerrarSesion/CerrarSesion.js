import { useAuth } from "../auth";

const CerrarSesion = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.cerrarSesion();
  };

  return (
    <div>
      <h1>Cerrar sesión</h1>

      <form onSubmit={logout}>
        <label>¿Seguro de que quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </div>
  );
};

export default CerrarSesion;
