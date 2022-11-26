import axios from 'axios'
import React from 'react'
import CampTile from './CampTile'
import Navbar from './Navbar'

export default function Donate(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/donor-camps")
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  return (
      <>
    < Navbar 
    flink = "Donate"
    flinkTo = "/person/donate"
    flinkStyle = {{color : "red", textDecoration : "underline solid red"}}
    slink = "Recieve"
    slinkTo = "/person/recieve"
    slinkStyle = {{}}
    user = {props.user}
    />
    <div className='tile-main-container'>
      <div className='panel'>
        <input type="text" id='search' placeholder='search'/>
        <select name="filter" id="filter">
          <option>Camps</option>
          <option>Blood Banks</option>
        </select>
      </div>
  
      <div className='tiles'>
        {data.length > 0 && data.map((item) => {
          return (
            <>
            <CampTile 
            key={item.camp_id}
            id = {item.camp_id}
            name = {item.camp_name}
            place = {item.camp_place}
            street = {item.camp_street}
            pincode = {item.camp_pincode}
            city = {item.camp_city}
            state = {item.camp_state}
            slots_left = {item.camp_slots_remaining}
            slots_total = {item.camp_slots_total}
            date = {item.camp_date}
            time = {item.camp_timing}
            organizer_id = {item.organizer_id}

            blood_bank_id = {item.blood_bank_id}
            />
            </>
          )
        })}
        
        
      </div>
        
    
    </div>
    </>
  )
}
