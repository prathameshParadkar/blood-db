import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import logo from "../logo.png";

function Register() {
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
  const [date, setDate] = useState('December 25, 1995 23:15:00');
  const [password, setPassword] = useState("Password");
  const [bloodGrp, setBloodGrp] = useState("A+")
  const [medCond, setMedCond] = useState("")
  const [redirect, setRedirect] = useState('')
const personRegister = (e) => {
  e.preventDefault();
  axios.post("http://localhost:5000/person-register", {
    fname,
    mname,
    lname,
    email,
    number,
    gender,
    buildNo,
    streetNo,
    pincode,
    city,
    state,
    date,
    bloodGrp,
    medCond,
    password
  })
  .then(res => {
    let data = res.data;
    if(data.isRegistered){
      setRedirect("/person/donate");
      alert("Registered successfully")
    }
    else{
      alert(data.msg)
    }
  })
  .catch(e => {
    console.log(e)
  })
}

if(redirect){
  return <Navigate to={{ pathname: `${redirect}` }} />
}

  return (
    <div>
        <img src={logo} alt="Blood-db" className="logo-reg"/>
        <div className="register">
        <input
            type="text"
            className="reg-fname"
            placeholder ={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-mname"
            placeholder ={mname}
            onChange={(e) => {
              setMname(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-lname"
            placeholder ={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            required
        />
        <p className="num">+91</p>
        <input
            type="text"
            className="reg-email"
            placeholder ={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
        />
        <input
            type="number"
            className="reg-number"
            placeholder ={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
        />
        <select id='select' className='gender' onChange={(e) => {setGender(e.target.value)}} defaultValue={"Male"}>
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
        <label className="date" htmlFor='date'>Date of Birth</label>
        <input type="date" className="date" id='date'
              onChange={(e) => {
              setDate(e.target.value);
        }} />
        <label htmlFor="bg" className='bg' >Blood Group</label>
        <select id='bg' className='blood-group' onChange={(e) => {setBloodGrp(`${e.target.value}`)}} defaultValue={"A+"}>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <label htmlFor="cond" className='cond'>If any medical conditions please specify</label>
        <input
            type="text"
            className="reg-cond"
            id='cond'
            onChange={(e) => {setMedCond(e.target.value)}}
        />
        <input
            type="password"
            className="reg-password"
            placeholder={password}
            onChange = {e => {setPassword(e.target.value)}}
            required
        />
        <button className="reg" onClick={personRegister}>Register</button>
        <a href="/">Already a User?</a>
        </div>
        <div className="reg-info">
        <h1 className="title">Person Registration</h1>
        <hr className="line" />
        <ul>
        <li>Donate blood by participating in various blood donation camps.  </li>
        <li>Receive Blood by requesting from donors and blood banks.</li>
        </ul>
    </div>
    </div>
  )
}

export default Register;