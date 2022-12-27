import axios from 'axios'
import React from 'react'
import Navbar from './Navbar'
import TileElement from './TileElement'

export default function Recieve() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.post("http://localhost:5000/rec-blood-banks", {
      bloodgroup : localStorage.getItem("bloodgroup")
    })
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])
  console.log(data)
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

<div className='tile-main-container' style={{marginBottom : 10, height : 100, overflow: "hidden"}}>
        <div className='panel'>
          <input type="text" id='search' placeholder='search'/>
          <select name="filter" id="filter">
            <option>Blood Banks</option>
            <option>Hospitals</option>
          </select>
        </div>
      </div>
      
    <div className='receive-tiles' >
    {data.length > 0 && data.map((item) => {
          return (
            <>
            <TileElement
              key = {item.blood_bank_id}
              id = {item.blood_bank_id}
              
              name = {item.blood_bank_name}
              place = {item.blood_bank_place}
              street = {item.blood_bank_street}
              pincode = {item.blood_bank_pincode}
              city = {item.blood_bank_city}
              state = {item.blood_bank_state}
              stock = {item.blood_stock}
              bloodgroup = {item.blood_type}
            />
            </>
          )
        })}
        
    </div>
    </>
  )
}
