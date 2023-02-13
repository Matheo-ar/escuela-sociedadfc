const rutas = [];
rutas.push({
  to: "/",
  text: "Incicio",
  private: false,
});
rutas.push({
  to: "/nosotros",
  text: "Nosotros",
  private: false,
});
rutas.push({
  to: "/sedes",
  text: "Sedes",
  private: false,
});
rutas.push({
  to: "/contactos",
  text: "Contactos",
  private: false,
});
rutas.push({
  to: "/registrate",
  text: "Registrate",
  private: false,
  publicOnly: true,
});
rutas.push({
  to: "/iniciar-sesion",
  text: "Iniciar sesión",
  private: false,
  publicOnly: true,
});
rutas.push({
  to: "/principal",
  text: "Principal",
  private: true,
});
rutas.push({
  to: "/perfil",
  text: "Perfil",
  private: true,
});
rutas.push({
  to: "/categorias",
  text: "Categorias",
  private: true,
});
rutas.push({
  to: "/usuarios",
  text: "Usuarios",
  private: true,
});
rutas.push({
  to: "/eventos",
  text: "Eventos",
  private: true,
});
rutas.push({
  to: "/cerrar-sesion",
  text: "Cerrar sesión",
  private: true,
});

export default rutas;
