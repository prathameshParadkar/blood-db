import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import logo from "../logo.png";

function Register() {
  const [orgName, setOrgName] = useState("Name");
  const [website, setWebsite] = useState("website");
  const [country, setCountry] = useState("country");
  const [fname, setFname] = useState("First Name");
  const [mname, setMname] = useState("Middle Name");
  const [lname, setLname] = useState("Last Name");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("Email");
  const [number, setNumber] = useState("Phone Number");
  const [buildNo, setBuildNo] = useState("Building no.");
  const [streetNo, setStreetNo] = useState("Street no.");
  const [pincode, setPincode] = useState("Pincode");
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const [date, setDate] = useState();
  const [password, setPassword] = useState("Password");
  const [redirect, setRedirect] = useState('')

  const registerOrg = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/org-register", {
      orgName,
      website,
      country,
      fname,
      mname,
      lname,
      buildNo,
      streetNo,
      pincode,
      city,
      state,
      email,
      number,
      gender,
      date,
      password
    })
    .then(res => {
      let data = res.data;
      if(data.isRegistered){
        setRedirect("/organization/create-a-camp");
        alert("registered successfully");
      }
      else{
        alert(data.msg);
      }
    })
    .catch(e => {
      console.log(e);
    })
  }
  if(redirect){
    return <Navigate to={{ pathname: `${redirect}` }} />
  }
  return (
    <div>
        <img src={logo} alt="Blood-db" className="logo-reg"/>
        <div className="register">
        {/* <p className="section">Organisation Details: </p> */}
        
        <input
            type="text"
            className="reg-fname"
            placeholder={orgName}
            onChange={(e) => {
              setOrgName(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-mname"
            placeholder={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-lname"
            placeholder={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            required
        />
        
        <p className="section">Administrator details : </p>
        <input
            type="text"
            className="reg-org-fname"
            placeholder ={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-org-mname"
            placeholder ={mname}
            onChange={(e) => {
              setMname(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-org-lname"
            placeholder ={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            required
        />
        <p className="num-org">+91</p>
        <input
            type="text"
            className="reg-org-email"
            placeholder ={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
        />
        <input
            type="number"
            className="reg-org-number"
            placeholder ={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
        />
        <select id='select' className='gender-org' onChange={(e) => {setGender(e.target.value)}} defaultValue={"Male"}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="non-binary">Prefer Not to say</option>
        </select>
            
        <input
            type="text"
            className="build-no"
            placeholder = {buildNo}
            onChange = {function(e){
              setBuildNo(e.target.value)
            }}
            required
        />
        <input
            type="text"
            className="street-no"
            placeholder = {streetNo}
            onChange = {function(e){
              setStreetNo(e.target.value)
            }}
            required
        />
        <input
            type="text"
            className="pincode"
            placeholder = {pincode}
            onChange = {function(e){
              setPincode(e.target.value)
            }}
            required
        />
        <input
            type="text"
            className="city"
            placeholder = {city}
            onChange = {function(e){
              setCity(e.target.value)
            }}
            required
        />
        <input
            type="text"
            className="state"
            placeholder = {state}
            onChange = {function(e){
              setState(e.target.value)
            }}
            required
        />
        <label className="date-org" htmlFor='date'>Date of Birth</label>
        <input type="date" className="date-org" id='date'
              onChange={(e) => {
              setDate(e.target.value);
        }} />
        
        
        <input
            type="password"
            className="reg-password"
            placeholder={password}
            onChange = {e => {setPassword(e.target.value)}}
            required
        />
        <button className="reg" onClick={registerOrg}>Register</button>
        <a href="/">Already a User?</a>
        </div>
        <div className="reg-info">
        <h1 className="title">Organiztion Registration</h1>
        <hr className="line" />
        <ul>
            <li>Organize donation camps where people can donate blood</li>
            <li>Provide the collected blood to blood bank</li>
        </ul>
        </div>
    </div>
  )
}

export default Register;
    