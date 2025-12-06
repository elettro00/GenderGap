import React from 'react'
import "../styles/stats.css"
import Count from './utilities/Count'

export default function Stats() {

  return (
    <section id='stats' className="section">

        <h2 className='section-title'>Statistiche Chiave 2024-2025</h2>
        <p className='section-subtitle'>Uno sguardo alle principali metriche del gender gap italiano</p>

        <div className='stats-grid'>

            <div className='stat-card'>
                <div className='stat-value'><Count from={0} to={85} duration={0.8} className="count-up-text" />°</div>
                <div className='stat-label'>Posizione dell'Italia nel Global Gender Gap Index 2025 su 148 paesi (punteggio: 0,704)</div>
                <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://reports.weforum.org/docs/WEF_GGGR_2025.pdf'>fonte</a>
            </div>

            <div className="stat-card">
                <div className="stat-value"><Count from={0} to={20} duration={0.8} className="count-up-text" />-
                <Count from={0} to={25} duration={0.8} className="count-up-text" />%</div>
                <div className="stat-label">Divario salariale medio: le donne guadagnano il 25% in meno degli uomini</div>
                 <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://www.europarl.europa.eu'>fonte</a>
            </div>

            <div className="stat-card">
                <div className="stat-value"><Count from={0} to={42} duration={0.8} className="count-up-text" />%</div>
                <div className="stat-label">Gap salariale per giovani laureate: il più profondo dell'OCSE</div>
                <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://reports.weforum.org/docs/WEF_GGGR_2025.pdf'>fonte</a>
            </div>

            <div className="stat-card">
                <div className="stat-value"><Count from={0} to={123} duration={0.8} className="count-up-text" /></div>
                <div className="stat-label">Anni necessari al ritmo attuale per raggiungere la parità globale</div>
                <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://reports.weforum.org/docs/WEF_GGGR_2025.pdf'>fonte</a>
            </div>

            <div className="stat-card">
                <div className="stat-value"><Count from={0} to={52} duration={0.8} className="count-up-text" />-
                <Count from={0} to={54} duration={0.8} className="count-up-text" />%</div>
                <div className="stat-label">Italia ultimo posto UE per tasso occupazione femminile</div>
                <a className='insight-link' target="_blank" rel="noopener noreferrer" href='https://altreconomia.it'>fonte</a>
            </div>
        </div>

    </section>
  )
}


