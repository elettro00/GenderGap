import React from "react";
import Chart from "react-apexcharts";
import "../../styles/apexchart_custom.css"

const ColumnChart = ({data1, data2, label1, label2, categories, vertical, w}) => {
  const options = {
    stroke: {
      width: 1, 
      colors: ['#000000'] 
    },

    chart: {
      type: 'bar',
      stacked: true,
      stackType: "100%",
     
      animations: {
        enabled: true,
        speed: 450,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
    }
   
  },

    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'  
        }
      }
    },

    plotOptions: {
      bar: {
        horizontal: vertical ? false : true,
        columnWidth: vertical ? '50%' : '30%',
        endingShape: 'rounded',
      },
    },

    dataLabels: {
      enabled: false,
      style: {
        colors: ['#000']
      }
    },

    legend: {
      position: 'bottom',
      onItemClick: {
        toggleDataSeries: false
      },
      labels: {
        colors: ['#ffffff', '#ffffff']
      }
    },

    tooltip: {
      theme: 'dark',
      enabled: true,
      shared: true,
      intersect: false,
      y: {
        formatter: function (val) {
          return (val).toString() + '%';
        }
      }
    },
    
    yaxis: {
      labels: {
        style: {
          colors: '#ffffff', 
          fontSize: w < 600 ? '10px' : '12px'
        }
      }
    },

    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: '#ffffff', 
          fontSize: w < 600 ? '10px' : '12px'
        }
      }
    },
  };

  const series = [
    {
      name: label1,
      data: data1,
    },
    {
      name: label2,
      data: data2,
    },
  ];
  
  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ColumnChart;
