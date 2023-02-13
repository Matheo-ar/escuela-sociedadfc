import logo from '../imagenes/logo.png'
import '../styles/Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='sociedadfc' />
    </div>
  )
}

export default Logo