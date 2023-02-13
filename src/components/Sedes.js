import infoSedes from "./infoSedes"
import '../styles/Sedes.css'

const Sedes = () => {
  return (
    <div className='sedes'>
      {infoSedes.map(sede => 
          <div className='sede'>
            <h1>{sede.nombre}</h1>
            <h3>{sede.lugar}</h3>
            <p className='direccion'>{sede.direccion}</p>
          </div>
        )}
    </div>
  )
}

export default Sedes