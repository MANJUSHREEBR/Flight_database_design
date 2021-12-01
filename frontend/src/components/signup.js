import React, { useEffect, useState } from "react";
import usd_flightsearch from './usd_flightsearch.jpeg'; 
import {Redirect} from 'react-router-dom';

function Signup(props) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setsetpassword] = useState("");

    const submitHandler = (e) => {
       localStorage.setItem('signup', JSON.stringify({name, email, password}));
       props.history.push('/');
    }
    return (
        <div  className="container-fluid" style={{backgroundImage: `url(${usd_flightsearch})` , height: "48rem", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="row">
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-md-6 col-lg-6">
                <form style={{padding: "110px"}} onSubmit={submitHandler}>
      <h1> User signup</h1>
      <div className="form-group">
      <label className="text-muted">Name</label>
        <input type="text" className="form-control" value={name} onChange={(e)=> setname(e.target.value) } required/>
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e)=> setemail(e.target.value) } required/>
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input  type="password" className="form-control" value={password} onChange={(e)=> setsetpassword(e.target.value) } required/>
      </div>
      <div />
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup;
