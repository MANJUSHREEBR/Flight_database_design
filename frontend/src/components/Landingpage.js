import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import usd_flightsearch from './usd_flightsearch.jpeg'; 

function Landingpage(props) {
    const [email, setemail] = useState("");
    const [password, setsetpassword] = useState("");
    const [error, seterror] = useState(false);
    const submitHandler = (e)=>{
        e.preventDefault();
       const signup = JSON.parse(localStorage.getItem('signup'));
       if(signup.email === email && signup.password === password){
        props.history.push('./Home');
       }
       else
       seterror(true);

    }
    return (
        <div  className="container-fluid" style={{backgroundImage: `url(${usd_flightsearch})` , height: "48rem", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="row">
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-md-6 col-lg-6">
                <form style={{padding: "110px"}}>
                {error && <div className="alert alert-danger" style={{backgroundColor: '#a98e91'}}>Invalid credentials</div>}
        <h1> User login</h1>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e)=> setemail(e.target.value) } required/>
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input  type="password" className="form-control" value={password} onChange={(e)=> setsetpassword(e.target.value) } required/>
      </div>
      New User?
      {' '}
      <Link to="/signup" style={{color: "black"}}>Please Signup here! </Link>
      <div />
      <button type="submit" className="btn btn-dark" onClick={submitHandler} >
        Submit
      </button>
    </form>
                </div>

            </div>
        </div>
    )
}

export default Landingpage
