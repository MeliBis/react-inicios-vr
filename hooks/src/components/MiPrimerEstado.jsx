import React, {useState} from 'react'

const MiPrimerEstado = () => {
   //problematica
/*     const cambiarNombre = (e) =>{
        nombre ='MeliB'
    }
    let nombre='Melissa Barrios' */

    const [nombre, setNombre] = useState("Melissa Barrios");
    
    let cambiarNombre= (e,nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: miPrimerEstado</h3>
        <strong className='label'>{nombre}</strong>
        &nbsp;
        <button onClick={e =>  cambiarNombre (e, 'Barrios') }>cambiar nombre por Barrios</button>
        &nbsp;
        <input type="text"onChange={e => cambiarNombre(e,e.target.value)}  name="" placeholder='Cambia el nombre' id="" />
    </div>
  )
}

export default MiPrimerEstado