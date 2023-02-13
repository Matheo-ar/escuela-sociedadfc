import Titulo from './Titulo';
import Escudo from './Escudo';
import Info from './Info';
import '../styles/Inicio.css'

const Inicio = () => {
  return (
    <div className='inicio'>
      <Titulo />
      <Escudo />
      <Info />
    </div>
  )
}

export default Inicio