import React from 'react'
import CurrentYear from './components/ejercicio1/CurrentYear'
import PrimerComponente from './components/PrimerComponente'
import PropTypes from "prop-types"



const App = () => {
  /* 3: */
  const fecha = new Date ();
  const yearActual = fecha.getFullYear();


  return (
    <>
      <PrimerComponente/>
      <CurrentYear year={yearActual}/>
    </>
  )
}

CurrentYear.propTypes= {
  year:PropTypes.number.isRequired
}
export default App
