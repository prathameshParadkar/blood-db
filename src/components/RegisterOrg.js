import React, { useState } from 'react';
import logo from "../logo.png";

function Register() {
  const [fname, setFname] = useState("First Name");
  const [mname, setMname] = useState("Middle Name");
  const [lname, setLname] = useState("Last Name");
  const [email, setEmail] = useState("Email");
  const [number, setNumber] = useState("Phone Number");
  const [date, setDate] = useState();

  return (
    <div>
        <img src={logo} alt="Blood-db" className="logo-reg"/>
        <div className="register">
        <p className="section">Organisation Details: </p>
        
        <input
            type="text"
            className="reg-fname"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-mname"
            value={mname}
            onChange={(e) => {
              setMname(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-lname"
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            required
        />
        <p className="num">+91</p>
        <input
            type="text"
            className="reg-email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
        />
        <input
            type="text"
            className="reg-number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
        />
        <select id='select' className='gender'>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non binary">Prefer Not to say</option>
        </select>
        <input
            type="text"
            className="build-no"
            required
        />
        <input
            type="text"
            className="street-no"
            required
        />
        <input
            type="text"
            className="pincode"
            required
        />
        <input
            type="text"
            className="city"
            required
        />
        <input
            type="text"
            className="state"
            required
        />
        <label className="date" htmlFor='date'>Date of Birth</label>
        <input type="date" className="date" id='date'
              onChange={(e) => {
              setDate(e.target.value);
        }} />
        <label htmlFor="bg" className='bg'>Blood Group</label>
        <select id='bg' className='blood-group'>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
        </select>
        <label htmlFor="cond" className='cond'>If any medical conditions please specify</label>
        <input
            type="text"
            className="reg-cond"
            id='cond'
            required
        />
        <input
            type="password"
            className="reg-password"
            required
        />
        <button className="reg">Register</button>
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
    