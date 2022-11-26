import React from 'react'
import Navbar from './Navbar'

export default function Recieve() {
  return (
    <Navbar 
    flink = "Donate"
    flinkTo = "/person/donate"
    flinkStyle = {{}}
    slink = "Recieve"
    slinkTo = "/person/recieve"
    slinkStyle = {{color : "red", textDecoration : "underline solid red"}}
    />
  )
}
