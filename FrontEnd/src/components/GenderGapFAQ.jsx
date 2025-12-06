import React from "react";
// import { motion } from "framer-motion";
import "../styles/insights.css";
import "../styles/genderGapFAQ.css";

export default function GenderGapFAQ() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 30 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: false }}
    //   transition={{ duration: 0.6, ease: "easeOut" }}
    // >
      <section id="gender-gap-faq" className="section">
        <h2 className="section-title">Domande sul Gender Gap</h2>
        <p className="section-subtitle">
          Una breve introduzione per comprendere il significato del gender gap e
          il collegamento con i grafici sottostanti.
        </p>

        <div className="gg-faq-column">
          <div className="insight-card gg-faq-item">
            <div className="insight-title">
              ❓ Che cos&apos;è il gender gap?
            </div>
            <div className="insight-text">
              Il gender gap è il divario tra uomini e donne in termini di
              accesso alle opportunità, partecipazione, carriera e retribuzione,
              con particolare attenzione in questa analisi alle materie STEM e
              ICT lungo il percorso accademico e professionale.
            </div>
          </div>

          <div className="insight-card gg-faq-item">
            <div className="insight-title">
              🤔 Perché si crea questo divario?
            </div>
            <div className="insight-text">
              Il divario nasce da una combinazione di stereotipi culturali,
              scarsa presenza di modelli femminili, orientamento poco mirato
              verso le carriere tecnico‑scientifiche e barriere strutturali che
              rendono più difficile per le donne accedere e progredire nei
              percorsi STEM e ICT.
            </div>
          </div>

          <div className="insight-card gg-faq-item">
            <div className="insight-title">📊 Che cosa mostrano i grafici?</div>
            <div className="insight-text">
              I grafici seguono le principali tappe della carriera accademica
              immatricolati, laureati, dottori, dottorandi e
              professori/ricercatori e le varie aziende in cui lavorano, dove mostrano come le donne restino
              sistematicamente sottorappresentate rispetto agli uomini in ogni
              fase, con un divario particolarmente marcato nelle aree ICT.
            </div>
          </div>

          <div className="insight-card gg-faq-item">
            <div className="insight-title">
              🎯 Perché è importante ridurre il gender gap?
            </div>
            <div className="insight-text">
              Ridurre il gender gap significa valorizzare pienamente i talenti
              femminili, aumentare la capacità innovativa del paese e promuovere
              una crescita economica più equa e sostenibile, in linea con le
              migliori pratiche internazionali nei paesi che hanno quasi colmato
              il divario.
            </div>
          </div>
        </div>
      </section>
    // </motion.div>
  );
}
