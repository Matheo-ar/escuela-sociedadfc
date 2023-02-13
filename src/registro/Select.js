import { useField } from "formik";
import '../stylesRegistro/Select.css'

const Select = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <div className='select'>
      <label>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error 
        ? <div className='error'>{meta.error}</div>
        : null}
    </div>
  )
}

export default Select