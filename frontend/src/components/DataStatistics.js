import React, { Component } from "react";
import Chart from "react-apexcharts";

class DataStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line-chart"
        },
        xaxis: {
          type: "Number"
        },
        stroke: {
          curve: "straight",
          width: 2
        },
        markers: {
          size: 4
        },
        title: {
          text: "Data Statistics",
          align: "left"
        },
        legend: {
          position: "top",
          markers: {
            fillColors: ["", "", "gray", "gray", "gray"]
          },
          fontSize: 13,
          fontWeight: 500,
          onItemHover: {
            highlightDataSeries: true
          },
          itemMargin: {
            horizontal: 15,
            vertical: 0
          }
        },
        tooltip: {
          enabled: true,
          shared: true,
          followCursor: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          theme: "dark",
          style: {
            fontSize: "12px",
            fontFamily: "Raleway"
          },
          onDatasetHover: {
            highlightDataSeries: true
          },
          x: {
            show: true,
            format: "dd MMM",
            formatter: undefined
          },
          y: {
            show: true,
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName
            }
          }
        }
      },
      series: [
        {
          name: "Expert",
          data: [
            {
              x: 'WN',
              y: 220016
            },
            {
              x: 'DL',
              y: 133732
            },
            {
              x: 'AA',
              y: 123421
            },
            {
              x: 'UA',
              y: 122097
            },
            {
              x: 'US',
              y: 100075
            },
            {
                x: 'OO',
                y: 69453
              },
              {
                x: 'EV',
                y: 51257
              },
              {
                x: 'B6',
                y: 46494
              },
             
            
          ]
        },
        
  
      ]
    };
  }

  render() {
    return (
      <div className="dataStatistics">
        <div className="line-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="90%"
            height="290"
          />
        </div>
      </div>
    );
  }
}

export default DataStatistics;
