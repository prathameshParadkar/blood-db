import React, { useState } from "react";
import { Button } from "./Button";
import logo from "../logo.png";
import axios from 'axios';
import { Navigate } from "react-router";

function Login() {
    const [email, setEmail] = useState("your email");
    const [password, setPassword] = useState("Password");
    const [loginType, setLoginType] = useState("Organization");
    const [redirect, setRedirect] = useState('')

    const login = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/',
      {
       email,
       password,
       loginType 
      })
      .then((res) => {
        let data = res.data;
        if(data.isLogin){
          // alert(data.msg);
          setRedirect("/home")
        }
        else{
          alert(data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      })
    }
    if(redirect){
      return <Navigate to={{ pathname: `${redirect}` }} />
    }

  return (
    <>
    
      <div className="login-form">
        <img src={logo} alt="Blood-db" className="logo"/>
        {/* <button className="person-box" onClick={e => {setLoginType("Person")}}>
          <i class="fa-regular fa-user"></i>
          <p>Person Login</p>
        </button> */}
        {loginType === "Person" ? 
        <Button buttonColour="btn--red" onClick={e => {setLoginType("Person")}} buttonType="person">
          <i class="fa-regular fa-user"></i>
          <p>Person Login</p>
        </Button> :
         <Button buttonColour="btn--white" onClick={e => {setLoginType("Person")}} buttonType="person">
         <i class="fa-regular fa-user"></i>
         <p>Person Login</p>
       </Button>}
       {loginType === "Organization" ? 
        <Button buttonColour="btn--red" onClick={e => {setLoginType("Organization")}} buttonType="organisation">
        <i class="fa-regular fa-building"></i>
          <p>Organization Login</p>
        </Button> :
        <Button buttonColour="btn--white" onClick={e => {setLoginType("Organization")}} buttonType="organisation">
        <i class="fa-regular fa-building"></i>
          <p>Organization Login</p>
        </Button>}
        <div className="login">
          <input
            type="text"
            className="login-email"
            placeholder = {email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            className="login-password"
            placeholder = {password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button className="login" onClick={login}>Sign In</button>
        </div>
        {loginType === "Person" &&  <a href="/register/person">Not a registered User?</a> }
        {loginType === "Organization" &&   <a href="/register/organisation">Not a registered Organization?</a>}
      </div>
      {loginType === "Organization" && 
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
    <h5>&#169;team_semicolon</h5>
    </>
  );
}

export default Login;
