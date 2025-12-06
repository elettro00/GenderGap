import React, { useEffect, useState, useMemo } from "react";
import Dropdown from "../utilities/Dropdown";
import "../../styles/filterCharts.css";
import FilterChart from "../chartsType/FilterChart";
import { getCachedData } from "../utilities/cache";
import FilterChartSingle from "../chartsType/FilterChartSingle";
import FilterChartAll from "../chartsType/FilterChartsALL";
import FilterChartAllSingle from "../chartsType/FilterChartsALLSingle";
import Switch from "../utilities/Switch";

const options_years = [
  { value: "2013", label: "2013" },
  { value: "2014", label: "2014" },
  { value: "2015", label: "2015" },
  { value: "2016", label: "2016" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

const options_type = [
  { value: "1", label: "Immatricolati" },
  { value: "2", label: "Laureati" },
  { value: "3", label: "Dottorandi" },
  { value: "4", label: "Dottori" },
  { value: "5", label: "Staff" },
];

const options_gender = [
  { value: "M", label: "Uomini" },
  { value: "F", label: "Donne" },
];

const options_regione = [
  { value: "Abruzzo", label: "Abruzzo" },
  { value: "Basilicata", label: "Basilicata" },
  { value: "Calabria", label: "Calabria" },
  { value: "Campania", label: "Campania" },
  { value: "Emilia Romagna", label: "Emilia-Romagna" },
  { value: "Friuli Venezia Giulia", label: "Friuli-Venezia Giulia" },
  { value: "Lazio", label: "Lazio" },
  { value: "Liguria", label: "Liguria" },
  { value: "Lombardia", label: "Lombardia" },
  { value: "Marche", label: "Marche" },
  { value: "Molise", label: "Molise" },
  { value: "Piemonte", label: "Piemonte" },
  { value: "Puglia", label: "Puglia" },
  { value: "Sardegna", label: "Sardegna" },
  { value: "Sicilia", label: "Sicilia" },
  { value: "Toscana", label: "Toscana" },
  { value: "Trentino Alto Adige", label: "Trentino-Alto Adige" },
  { value: "Umbria", label: "Umbria" },
  { value: "Veneto", label: "Veneto" },
];

const options_area_geo = [
  { value: "1", label: "ICT" },
];

const CATEGORIES_ALL = ["Immatricolati", "Laureati", "Dottorandi", "Dottori", "Prof e Ricercatori"];
const EMPTY_DATA = [0, 0, 0, 0, 0];

export default function FilterCharts() {
  const [year, setYear] = useState("ALL");
  const [classe, setClasse] = useState("ALL");
  const [genere, setGenere] = useState("ALL");
  const [regione, setRegione] = useState("ALL");
  const [settore, setSettore] = useState("ALL");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPerc, setIsPerc] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getCachedData(
          `/api/filter/getByFilter?year=${year}&regione=${regione}&classe=${classe}&genere=${genere}&settore=${settore}`,
          {
            cacheTTL: 5 * 60 * 1000,
          }
        );
        setData(result);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year, regione, classe, genere, settore]);

  const processRegionData = () => {
    if (!data?.data) return { categories: [], data1: [], data2: [] };

    return {
      categories: data.data.regioni || [],
      data1: isPerc ? data.data.perc_uomini : data.data.uomini,
      data2: isPerc ? data.data.perc_donne : data.data.donne,
    };
  };

  const processTimeSeriesData = (genereValue) => {
    if (!data?.data || !Array.isArray(data.data)) {
      return { categories: [], data1: [], data2: [] };
    }

    // console.log(data, genereValue );
    

    const category = [];
    const data1 = [];
    const data2 = [];
    const perc_data1 = [];
    const perc_data2 = [];

    data.data.forEach((item) => {
      category.push(item.anno);
      data1.push(item.uomini);
      data2.push(item.donne);
      perc_data1.push(item.perc_uomini);
      perc_data2.push(item.perc_donne);
    });

    // console.log(data1, data2);
    

    return {
      categories: category,
      data1: genereValue == "F" ? data2 : isPerc ? perc_data1 : data1,
      data2: isPerc ? perc_data2 : data2,
    };
  };

  const processAllTypesData = () => {
    const data1 = [...EMPTY_DATA];
    const data2 = [...EMPTY_DATA];
    const perc_1 = [...EMPTY_DATA];
    const perc_2 = [...EMPTY_DATA];

    if (Array.isArray(data?.data)) {
      
      data.data.forEach((item) => {
        const typeIndex = parseInt(item.type, 10) - 1;
        if (typeIndex >= 0 && typeIndex < 5) {
          data1[typeIndex] = item.data.uomini;
          data2[typeIndex] = item.data.donne;
          perc_1[typeIndex] = item.data.perc_uomini;
          perc_2[typeIndex] = item.data.perc_donne;
        }
      });
    }

    return {
      data1: isPerc ? perc_1 : data1,
      data2: isPerc ? perc_2 : data2,
    };
  };

  const processAllTypesSingleData = () => {
    const data1 = [...EMPTY_DATA];
    const perc_1 = [...EMPTY_DATA];

    if (Array.isArray(data?.data)) {
        // console.log(data);
      data.data.forEach((item) => {
        const typeIndex = parseInt(item.type, 10) - 1;
        if (typeIndex >= 0 && typeIndex < 5) {
          const genderKey = genere === "M" ? "uomini" : "donne";
          const percKey = genere === "M" ? "perc_uomini" : "perc_donne";
          data1[typeIndex] = item.data[genderKey];
          perc_1[typeIndex] = item.data[percKey];
        }
      });
    }

    return {
      data1: isPerc ? perc_1 : data1,
    };
  };

  const ErrorFallback = ({ error }) => (
    <div style={{ padding: "20px", color: "red" }}>
      <h3>Errore nel caricamento del grafico</h3>
      <p>{error?.message || "Errore sconosciuto"}</p>
    </div>
  );

  const chartComponent = useMemo(() => {
    if (!data?.data || loading) {
      return (
        <FilterChartAll
          vertical={true}
          categories={CATEGORIES_ALL}
          data1={EMPTY_DATA}
          data2={EMPTY_DATA}
          label1="uomini"
          label2="donne"
          isPerc={isPerc}
        />
      );
    }

    if (error) {
      return <ErrorFallback error={error} />;
    }

    try {
      const { classe: classeValue, genere: genereValue, year: yearValue, regione: regioneValue } = data.filters;

      if (classeValue !== "ALL") {
        if (yearValue !== "ALL" && regioneValue === "ALL") {

          if (genereValue !== "ALL") {
            const regionData = processRegionData();
            return (
              <FilterChartSingle
                vertical={true}
                categories={regionData.categories}
                data1={genereValue === "M" ? regionData.data1 : regionData.data2}
                label1={genereValue === "M" ? "uomini" : "donne"}
                barColor={genereValue === "F" ? "#00e396" : "#008ffb"}
                isPerc={isPerc}
              />
            );
          }
          else {
            const regionData = processRegionData();
            return (
              <FilterChart
                vertical={true}
                categories={regionData.categories}
                data1={regionData.data1}
                data2={regionData.data2}
                label1="uomini"
                label2="donne"
                isPerc={isPerc}
              />
            );
          }
        }
        else {
          const timeSeriesData = processTimeSeriesData(genereValue);

          if (genereValue !== "ALL") {
            return (
              <FilterChartSingle
                vertical={true}
                categories={timeSeriesData.categories}
                data1={timeSeriesData.data1}
                label1={genereValue === "M" ? "uomini" : "donne"}
                barColor={genereValue === "F" ? "#00e396" : "#008ffb"}
                isPerc={isPerc}
              />
            );
          } else {
            return (
              <FilterChart
                vertical={true}
                categories={timeSeriesData.categories}
                data1={timeSeriesData.data1}
                data2={timeSeriesData.data2}
                label1="uomini"
                label2="donne"
                isPerc={isPerc}
              />
            );
          }
        }
      }
      else {
        if (genereValue === "ALL") {
          const allTypesData = processAllTypesData();
          return (
            <FilterChartAll
              vertical={true}
              categories={CATEGORIES_ALL}
              data1={allTypesData.data1}
              data2={allTypesData.data2}
              label1="uomini"
              label2="donne"
              isPerc={isPerc}
            />
          );
        } else {
          const allTypesSingleData = processAllTypesSingleData();
          return (
            <FilterChartAllSingle
              vertical={true}
              categories={CATEGORIES_ALL}
              data1={allTypesSingleData.data1}
              label1={genereValue === "M" ? "uomini" : "donne"}
              barColor={genereValue === "F" ? "#00e396" : "#008ffb"}
              isPerc={isPerc}
            />
          );
        }
      }
    } catch (error) {
      console.error("Errore nel rendering del grafico:", error);
      return <ErrorFallback error={error} />;
    }
  }, [data, loading, isPerc, error]);

  return (
    <div className="filter-container">
      <div className="filter-choose">
        <Dropdown
          options={options_years}
          title="Seleziona Anno:"
          df="ALL"
          setData={setYear}
          desc="filter-year"
          state={year}
        />
        <Dropdown
          options={options_type}
          title="Seleziona Classe:"
          df="ALL"
          setData={setClasse}
          desc="filter-class"
          state={classe}
        />
        <Dropdown
          options={options_gender}
          title="Seleziona Genere:"
          df="ALL"
          setData={setGenere}
          desc="filter-gender"
          state={genere}
        />
        <Dropdown
          options={options_regione}
          title="Seleziona Regione:"
          df="ALL"
          setData={setRegione}
          desc="filter-regione"
          state={regione}
        />
        <Dropdown
          options={options_area_geo}
          title="Seleziona Settore:"
          df="ALL"
          setData={setSettore}
          desc="filter-area"
          state={settore}
        />
        <Switch state={isPerc} setState={setIsPerc} isActive={genere != "ALL"}/>
      </div>

      <div className="filter-chart">{chartComponent}</div>
    </div>
  );
}