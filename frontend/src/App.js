import React, { Component } from 'react';
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './take-a-vacation.jpeg'; 

console.log(logo);

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
          <h1>
            Expert Flight Search
          </h1>
          <input type="radio" value="oneway" name="genbookingtypeder" /> One way
          <input type="radio" value="round" name="bookingtype" /> Round Trip

      </header>
      
    
    <div className="form" 
    // style={{
      // background: `url(${logo})`, width:'100%', height:'1000px', 
    // }}
    >
      
      <form>
      
        <label>
          <span><input type="text" placeholder="Leaving from" name="source" /> </span>
        </label>
  
        <label>
          {/* Going to: */}
          <input type="text" placeholder="Going to" name="destination" /> <br /><br/>
        </label>

        <input type="date" value="Departing on"/> <br/> <br/>
        
        <input type="submit" value="Search" />
        
    </form>
    
      </div>
    </div>
    
  );
}

 export default App;