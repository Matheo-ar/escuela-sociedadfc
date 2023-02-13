import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider, AuthRoute } from "./auth";
import BarraNavegacion from "./components/BarraNavegacion";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Sedes from "./components/Sedes";
import Contactos from "./components/Contactos";
import Registrate from "./registro/Registrate";
import Footer from "./components/Footer";
import Login from "./Login/Login";
import Principal from "./principal/Principal";
import Perfil from "./perfil/Perfil";
import Categorias from "./categorias/Categorias";
import Usuarios from "./usuarios/Usuarios";
import Eventos from "./eventos/Eventos";
import CerrarSesion from "./cerrarSesion/CerrarSesion";

function App() {
  return (
    <div>
      <HashRouter>
        <AuthProvider>
          <BarraNavegacion />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/sedes" element={<Sedes />} />
            <Route path="/contactos" element={<Contactos />} />

            <Route path="/registrate" element={<Registrate />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route
              path="/principal"
              element={
                <AuthRoute>
                  <Principal />
                </AuthRoute>
              }
            />
            <Route
              path="/perfil"
              element={
                <AuthRoute>
                  <Perfil />
                </AuthRoute>
              }
            />
            <Route
              path="/categorias"
              element={
                <AuthRoute>
                  <Categorias />
                </AuthRoute>
              }
            />
            <Route
              path="/usuarios"
              element={
                <AuthRoute>
                  <Usuarios />
                </AuthRoute>
              }
            />
            <Route
              path="/eventos"
              element={
                <AuthRoute>
                  <Eventos />
                </AuthRoute>
              }
            />
            <Route
              path="/cerrar-sesion"
              element={
                <AuthRoute>
                  <CerrarSesion />
                </AuthRoute>
              }
            />

            <Route path="*" element={<h2>Not found</h2>} />
          </Routes>

          <Footer />
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
