import React from 'react'
import CurrentYear from './components/ejercicio1/CurrentYear'
import MiPrimerEstado from './components/MiPrimerEstado'

const App = () => {
  return (
    <div className='contenedor'>
      <h1 >El estado en React - Hook useState</h1>
      <MiPrimerEstado/>
      <CurrentYear/>
    </div>
  )
}

export default App