import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'

export default function Navbar(props) {
  return (
    <nav >
        <img src={logo} alt="" />
        <Link className='donate' style={props.flinkStyle} to ={props.flinkTo}>{props.flink}</Link>
        <Link className='recieve' style={props.slinkStyle} to = {props.slinkTo}>{props.slink}</Link>
        <p>{props.user}</p>
    </nav>
  )
}
