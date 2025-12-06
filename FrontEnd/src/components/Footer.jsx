import React from 'react'
import "../styles/footer.css"

export default function Footer() {
  return (

    <footer>
        <p>&copy; 2025 <a href='https://github.com/uCiceroCODE/GenderGap'>uCiceroCODE</a> | TEAM NULL. Analisi basata su dati estratti da:{"  "}
        <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://www.osservatoriodnf.it/it/home/'>Osservatorio DNF</a> ,
        <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://dati-ustat.mur.gov.it/dataset/dati-per-bilancio-di-genere'>MUR</a>
        </p>
        <p style={{fontSize:"0.85rem", marginTop:"1rem"}}>Progetto realizzato con React, Vite, Three.js | Dati aggiornati al 2024</p>
    </footer>

  )
}
