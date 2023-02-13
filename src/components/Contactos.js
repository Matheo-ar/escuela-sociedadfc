import infoContactos from './infoContactos'
import '../styles/Contactos.css'

const Contactos = () => {
  return (
    <div className='contactos'>
      {infoContactos.map(contacto => 
          <div className='contacto'>
            <img className='imagen' src={contacto.imagen} />
            <h1 className='nombre'>{contacto.nombre}</h1>
            <p className='url'>{contacto.url}</p>
          </div>
        )}
    </div>
  )
}

export default Contactos