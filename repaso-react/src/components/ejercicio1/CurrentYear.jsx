import React, {useState} from 'react'

const CurrentYear = ({year}) => {
const [yearNow, setYearNow] = useState(year)
const siguiente= e =>{
  setYearNow(yearNow+1)
}
const anterior= e =>{
  setYearNow(yearNow-1)
}
const cambiarYear = e =>{
  let dato = parseInt(e.target.value);
  if(Number.isInteger(dato)){
    setYearNow(dato)
  }else{
    setYearNow(year)

  }
}
  return (
    <div className='container'>
        <h2>Ejercicio con eventos y useState</h2>
        <p className='label'>{yearNow}</p>
        <p>
          <button onClick={anterior}>Anterior</button>
          &nbsp;
          <button onClick={siguiente}>Siguiente</button>
        </p>
        <p>Cambiar año</p>
        <input 
        onChange={cambiarYear}
          type="text" 
          name="" 
          placeholder='Cambiar año' 
          id="" />
        
    </div>
  )
}

export default CurrentYear