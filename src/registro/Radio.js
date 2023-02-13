import { useField } from "formik";
import '../stylesRegistro/Radio.css'

const Radio = ({ label, ...props }) => {

  const [field] = useField({ ...props, type: 'radio' })

  return (
    <div className='radio'>
      <label>
        <input type='radio' {...field} {...props} />
        {label}
      </label>
    </div>
  )
}

export default Radio