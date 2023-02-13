import { useState } from "react";
import { useAuth } from "../auth";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Input, Password } from "../registro/Input";
import Boton from "../registro/Boton";
import "../stylesLogin/Login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const [username, setUsername] = useState([]);

  const handleSubmit = (user) => {
    setUsername([...username, user]);
    auth.iniciarSesion({ username });
  };

  if (auth.user) {
    return <Navigate to="/principal" />;
  }

  return (
    <div className="containerLogin">
      <div className="formularioLogin">
        <Formik
          initialValues={{
            numDocumento: "",
            contraseña: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={yup.object({
            numDocumento: yup
              .number()
              .required("Obligatorio")
              .typeError("Debe ser numero"),
            contraseña: yup.string().required("Obligatorio"),
          })}
        >
          <Form>
            <h1>Iniciar sesión</h1>
            <Input name="numDocumento" label="Número de documento" />
            <Password name="contraseña" label="Contraseña" />
            <Boton type="submit">Iniciar sesión</Boton>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
