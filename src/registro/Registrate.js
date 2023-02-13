import { useState } from "react";
import { Formik, Form } from "formik";
import Select from "./Select";
import { Input, FechaNacimiento, Password, Correo } from "./Input";
import Radio from "./Radio";
import Boton from "./Boton";
import * as yup from "yup";
import "../stylesRegistro/Registrate.css";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";

const Registrate = () => {
  const auth = useAuth();
  const [usuarios, setUsuarios] = useState([]);

  const handleSubmit = (usuario, { resetForm }) => {
    setUsuarios([...usuarios, usuario]);
    resetForm();
  };
  console.log(usuarios);

  if (auth.user) {
    return <Navigate to="/principal" />;
  }

  return (
    <div className="container">
      <div className="formulario">
        <Formik
          initialValues={{
            tipoDocumento: "",
            numDocumeto: "",
            nombres: "",
            apellidos: "",
            sexo: "",
            fechaNacimiento: "",
            correo: "",
            celular: "",
            direccion: "",
            contraseña: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={yup.object({
            tipoDocumento: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser numeros"),
            numDocumeto: yup
              .number()
              .required("Obligatorio")
              .typeError("Debe ser numeros"),
            nombres: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
            apellidos: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
            sexo: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
            fechaNacimiento: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
            correo: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe tener @"),
            celular: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
            direccion: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
            contraseña: yup
              .string()
              .required("Obligatorio")
              .typeError("Debe ser letras"),
          })}
        >
          <Form>
            <h1>Registrate</h1>
            <Select name="tipoDocumento" label="Tipo de documento:    ">
              <option value="">Seleccione documento</option>
              <option value="registroCivil">RC</option>
              <option value="targetIdentidad">TI</option>
              <option value="cedulaCiudadania">CC</option>
              <option value="cedulaExtrangeria">CE</option>
            </Select>
            <Input name="numDocumeto" label="Número de documento" />
            <Input name="nombres" label="Nombres" />
            <Input name="apellidos" label="Apellidos" />
            <label>Sexo: </label>
            <Radio name="sexo" value="masculino" label="Masculino" />
            <Radio name="sexo" value="femenino" label="Femenino" />
            <FechaNacimiento
              name="fechaNacimiento"
              label="Fecha de nacimiento"
            />
            <Correo name="correo" label="Correo" />
            <Input name="celular" label="Celular" />
            <Input name="direccion" label="Dirección" />
            <Password name="contraseña" label="Contraseña" />
            <Boton type="submit">Registrate</Boton>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Registrate;
