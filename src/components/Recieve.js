import React from 'react'
import Navbar from './Navbar'
import TileElement from './TileElement'

export default function Recieve() {
  return (
    <>
    <Navbar 
    flink = "Donate"
    flinkTo = "/person/donate"
    flinkStyle = {{}}
    slink = "Recieve"
    slinkTo = "/person/recieve"
    slinkStyle = {{color : "red", textDecoration : "underline solid red"}}
    />
    <div className='tiles'>
      <TileElement />
      <TileElement />
      <TileElement />
      <TileElement />
    </div>
    </>
  )
}
