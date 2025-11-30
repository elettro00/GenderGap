import React, { useState, useEffect } from "react";
import "../../styles/secondaryChart.css";
import axios from "axios";
import ColumnChart from "../chartsType/ColumnChart";

export default function SecondaryChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/queries/getWomenPer`, {})
      .then((response) => {
        setData(() => {
          const temp = [];
          Object.entries(response.data).forEach(([chiave, x]) => {
            console.log(chiave, x);
            console.log(x.anno);
            temp.push({
              anno: x.anno,
              cod: x.cod,
              value: x.PercCOD,
            });

          });
          return temp;
        });
      })
      .catch((error) => console.error("Errore:", error))
      .finally(() => setLoading(false));
  }, []);

  const dataLen = 5;
  const cardsData = [{}, {}, {}, {}, {}];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev != 0 ? (prev - 1 + cardsData.length) % cardsData.length : prev
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev != dataLen - 1 ? (prev + 1) % cardsData.length : prev
    );
  };

  const getCardClass = (index) => {
    const diff = (index - currentIndex + cardsData.length) % cardsData.length;
    if (diff === 0) return "active";
    if (diff === cardsData.length - 1) return "prev";
    return "next";
  };

  console.log(data);
  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="secondary-containter">
      <h1>Grafici</h1>

      <div className={`secondary-wrapper`}>
        {currentIndex != 0 && (
          <button
            className="arrow-btn arrow-btn-left"
            onClick={handlePrev}
            aria-label="Precedente"
          >
            ←
          </button>
        )}

        <div className="secondary-stack-container">          
          {data && data.map((x, idx) => (
            <div
              key={idx}
              className={`graph-card ${getCardClass(idx)}`}
            >


            <div className="secondary-stack-index">
              {x.value.map((y, z) => (
              <div key={z}>
                {x.cod[z]}
              </div>
              ))
              }
            </div>
              <h3>Text</h3>

              <ColumnChart
                categories={[...x.anno]}
                data1={[...x.value[0]]}
                data2={[...x.value[0].map((w) => (100 - w).toFixed(2))]}
                vertical={true}
                label1={"Donne"}
                label2={"Uomini"}
              />
            </div>
          ))}
        </div>

        {currentIndex != dataLen - 1 && (
          <button
            className="arrow-btn arrow-btn-right"
            onClick={handleNext}
            aria-label="Successivo"
          >
            →
          </button>
        )}
      </div>
      <div className="indicator">
        {cardsData.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Vai a card ${idx + 1}`}
          />
        ))}
      </div>

      <div className="chart-description">
        <h3>{cardsData[currentIndex].titolo}</h3>
        <p>{cardsData[currentIndex].descrizione}</p>
      </div>
    </div>
  );
}
