import escudo from '../imagenes/escudo.jpg'
import '../styles/Escudo.css'

const Escudo = () => {
  return (
    <div className='escudo'>
      <img src={escudo} alt='escudo sociedad' className='imgEscudo' />
    </div>
  )
}

export default Escudo 