import React, { useState } from "react";
import { Button } from "./Button";
import logo from "../logo.png";

function Login() {
    const [email, setEmail] = useState("Email...");
    const [password, setPassword] = useState("");
    const [loginType, setLoginType] = useState("Organisation");
  return (
    <>
      <div className="login-form">
        <img src={logo} alt="Blood-db" className="logo"/>
        <button className="person-box" onClick={e => {setLoginType("Person")}}>
          <i class="fa-regular fa-user"></i>
          <p>Person Login</p>
        </button>
        <button className="organisation-box" onClick={e => {setLoginType("Organisation")}}>
          <i class="fa-regular fa-building"></i>
          <p>Organisation Login</p>
        </button>
        <div className="login">
          <input
            type="text"
            className="login-email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            className="login-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button className="login">Sign In</button>
        </div>
        {loginType === "Person" &&  <a href="/register">Not a registered User?</a> }
        {loginType === "Organisation" &&   <a href="/register">Not a registered Organisation?</a>}
      </div>
      {loginType === "Organisation" && 
        <div className="login-info">
        <h1 className="title">Organiztion Login</h1>
        <hr className="line" />
        <ul>
            <li>Organize donation camps where people can donate blood</li>
            <li>Provide the collected blood to blood bank</li>
        </ul>
        </div>
    }
    {loginType === "Person" && 
        <div className="login-info">
        <h1 className="title">Person Login</h1>
        <hr className="line" />
        <ul>
        <li>Donate blood by participating in various blood donation camps.  </li>
        <li>Receive Blood by requesting from donors and blood banks.</li>
        </ul>
    </div>}
    </>
  );
}

export default Login;
