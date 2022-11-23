import React from 'react'
import CampTile from './CampTile'
import Navbar from '../Navbar'
import axios from 'axios'

export default function Camps(props) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.post("http://localhost:5000/org-camps", {
      userId : localStorage.getItem("userId")
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  return (
    <>
    <Navbar 
    flink = "Create a Camp"
    flinkTo = "/organization/create-a-camp"
    flinkStyle = {{}}
    slink = "Camps"
    slinkTo = "/organization/camps"
    slinkStyle = {{color : "red", textDecoration : "underline solid red"}}
    user = {props.user}
    />
      <div className='tile-main-container' style={{marginBottom : 10, height : 100, overflow: "hidden"}}>
        <div className='panel'>
          <input type="text" id='search' placeholder='search'/>
          <select name="filter" id="filter">
            <option>Camps</option>
            <option>Camps</option>
          </select>
        </div>
      </div>

        <div className='tiles' style={{marginTop : 20}}>
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
    
    </>
  )
}
