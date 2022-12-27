import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from './images/logo.png'

export default function Navbar(props) {
  const [user, setUser] = React.useState('')
  const [redirect, setRedirect] = React.useState('')
  
  React.useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [])

  const logout = () => {
    let confirm1 = window.confirm("Are you sure you want to logout?");
    if(confirm1){
      setRedirect('/')
    }
  }

  if(redirect){
    return <Navigate to={{ pathname: `${redirect}` }} />
  }

  return (
    <nav >
        <img src={logo} alt="" />
        <Link className='donate' style={props.flinkStyle} to ={props.flinkTo}>{props.flink}</Link>
        <Link className='recieve' style={props.slinkStyle} to = {props.slinkTo}>{props.slink}</Link>
        <p onClick={logout} style={{cursor : "pointer"}}>{user}</p>
    </nav>
  )
}
