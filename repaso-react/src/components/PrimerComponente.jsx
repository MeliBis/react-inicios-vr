import React, {useState} from 'react'

const PrimerComponente = () => {

//let apellido = 'Barrios';

const [nombre, setNombre] = useState('MELISSA')

let cursos =[                                                                                           
    'master en JavaScript',
    'master en Python',
    'master en Ruby',
    'master en Perl',
]
const cambiarNombre = (nuevoNombre) =>{
   setNombre(nuevoNombre)
} 

  return (
    <>
    <div className='container'>
        <h1>Mi primer componente</h1>
        <p>Este es un texto componente</p>
        <p>este es un texto en mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >=4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
{/*         <p>mi apellido es: <strong>{apellido}</strong></p>
 */}     
        <input type="text" name="" onChange={e => cambiarNombre(e.target.value)} placeholder='cambiar nombre' id="" />
    <ul>
            {cursos.map((curso, index) => {
                return (<li key={index}>{curso}</li>)
            })}
        </ul>
        <button onClick={e => cambiarNombre('MeliB')}>Cambiar nombre</button>
    </div>
    </>
  )
}

export default PrimerComponente