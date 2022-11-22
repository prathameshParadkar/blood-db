import React from 'react'
import Navbar from '../Navbar'

export default function Camps(props) {
  return (
    <Navbar 
    flink = "Create a Camp"
    flinkTo = "/organization/create-a-camp"
    flinkStyle = {{}}
    slink = "Camps"
    slinkTo = "/organization/camps"
    slinkStyle = {{color : "red", textDecoration : "underline solid red"}}
    user = {props.user}
    />
  )
}
