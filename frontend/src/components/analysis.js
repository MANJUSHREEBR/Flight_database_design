/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import usd_flightsearch from './usd_flightsearch.jpeg'; 
import { BarChart } from "react-d3-components";
import DataStatistics from "./DataStatistics";
import missing_values from './missing_values.png'; 
import carrier_value_counts from './carrier_value_counts.png'; 
import monthsValueCounts from './monthsValueCounts.png'; 
import daysValueCounts from './daysValueCounts.png'; 

function Analysis() {
    const data = [
        {
          label: "Expert",
          values: [
            { x: 'WN', y: 575739 },
            { x: 'DL', y: 381657 },
            { x: 'AA', y: 289855 },
            { x: 'UA', y:  286418},
            { x: 'OO', y: 160164},
            { x: 'EV', y: 157928 },
            { x: 'B6', y: 121906 },
            { x: 'MQ', y: 113212 },
            { x: 'FL', y:  92702},
          ]
        }
      ];
    return (
        <div  className="container-fluid" style={{backgroundColor: "rgb(235 234 251)" , height: "100rem", backgroundSize: 'cover', backgroundPosition: 'center'}}>
         <h2 style={{color: "blue", fontFamily: "cursive", textAlign: 'center'}}>Data Analysis</h2>

            <div className="row">
                <div className="col-md-6" style={{backgroundColor: 'rgb(188 192 237)'}}>

                    <h5 style={{color: "blue", fontFamily: "cursive", textAlign: 'center'}}>Number of carriers and their count in the dataset</h5>
                           <DataStatistics/>
                </div>
                <div className="col-md-6" style={{backgroundColor: '#cfcfeb'}}>
                <h5 style={{color: "blue", fontFamily: "cursive", textAlign: 'center'}}>Null values in each columns</h5>
                 <img src={missing_values} style={{height: "500px"}}></img>
                </div>

                <div className="col-md-6" style={{backgroundColor: 'rgb(171 171 233)'}}>
                <h5 style={{color: "blue", fontFamily: "cursive", textAlign: 'center'}}>Value count of Carrier</h5>
                 <img src={carrier_value_counts} style={{height: "500px"}}></img>
                </div>
                
                <div className="col-md-6" style={{backgroundColor: '#cfcfeb'}}>
                <h5 style={{color: "blue", fontFamily: "cursive", textAlign: 'center'}}>Value count of Months</h5>
                 <img src={monthsValueCounts} style={{height: "500px"}}></img>
                </div>
                <div className="col-md-6" style={{backgroundColor: '#cfcfeb'}}>
                <h5 style={{color: "blue", fontFamily: "cursive", textAlign: 'center'}}>Value count of Days</h5>
                 <img src={daysValueCounts} style={{height: "500px"}}></img>
                </div>

                </div>
                
                

        </div>
    )
}

export default Analysis;
