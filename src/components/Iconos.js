import '../styles/Iconos.css'
import instagram from '../imagenes/instagram.png'
import facebook from '../imagenes/facebook.png'
import twitter from '../imagenes/twitter.png'

const Iconos = () => {
  return (
    <div className='iconos'>
      <img src={instagram} alt='instagram' />
      <p>@Sociedadfc</p>
      <img src={facebook} alt='facebook' className='facebook' />
      <p>Escuela Sociedad FC</p>
      <img src={twitter} alt='twitter' />
      <p>@Sociedadfc</p>
    </div>
  )
}

export default Iconos