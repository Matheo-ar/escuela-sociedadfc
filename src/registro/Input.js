import { useField } from "formik";
import '../stylesRegistro/Input.css'

const Input = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <div className='externo'>
      <label className='label'>{label}</label>
      <input className='input' {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

const FechaNacimiento = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <div className='externo'>
      <label className='label'>{label}</label>
      <input type='date' className='input' {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

const Correo = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <div className='externo'>
      <label className='label'>{label}</label>
      <input type='email' className='input' {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

const Password = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <div className='externo'>
      <label className='label'>{label}</label>
      <input type='password' className='input' {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export { Input, FechaNacimiento, Password, Correo }