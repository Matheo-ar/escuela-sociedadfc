import '../styles/Nosotros.css'
import infoEscuela from "./infoEscuela"

const Nosotros = () => {
  return (
    <div className='nosotros'>
      {infoEscuela.map(info => 
        <div className='contenedor'>
          <h1>{info.titulo}</h1>
          <p className='contenido'>{info.contenido}</p>
        </div>
      )}
      
    </div>
  )
}

export default Nosotros