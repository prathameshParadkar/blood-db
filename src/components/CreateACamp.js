import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import Navbar from './Navbar'

export default function CreateACamp(props) {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [streetNo, setStreetNo] = React.useState('');
  const [city, setCity] = React.useState('');
  const [pincode, setPincode] = React.useState('');
  const [state, setState] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [bbId, setBbId] = React.useState(0);
  const [slots, setSlots] = React.useState(0);
  const [redirect, setRedirect] = React.useState('')
  let navigate = useNavigate()

  React.useEffect(() => {
    axios.get("http://localhost:5000/blood-banks")
    .then(res => {
      setData(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  const addCamp = (e) => {
    axios.post("http://localhost:5000/camps", {
      name,
      date,
      time,
      place,
      streetNo,
      pincode,
      city,
      state,
      bbId,
      description,
      slots,
      userId : props.userId
    })
    .then(res => {
      if(res.data.isDone === true){
        setRedirect("/organization/camps")
      }
      else{
        alert(res.data.msg);
      }
    })
    .catch(e => {
      console.log(e)
    })
    
  }

  const validatePincode = (pincode) => {
    if((/^[1-9][0-9]{5}$/).test(pincode)){
      alert("valid pincode");
    }else if(pincode.length > 6){
      alert("Enter valid pincode");
    }
  }

  if(redirect){
    navigate(redirect)
  }
  return (
    <>
    <Navbar 
    flink = "Create a Camp"
    flinkTo = "/organization/create-a-camp"
    flinkStyle = {{color : "red", textDecoration : "underline solid red"}}
    slink = "Camps"
    slinkTo = "/organization/camps"
    slinkStyle = {{}}
    user = {props.user}
    />

    <label className='cac-name'>
      Camp name
      <input onChange={e => {
        setName(e.target.value);
      }} 
      type="text" name="name" />
    </label>
    <label className='cac-date'>
      Date
      <input type="date" onChange={e => {
        setDate(e.target.value);
      }}  name="name" />
    </label>
    <label className='cac-time'>
      Time
      <input onChange={e => {
        setTime(e.target.value);
      }} type="time" name="name" />
    </label>
    <label className='cac-place'>
      Place
      <input onChange={e => {
        setPlace(e.target.value);
      }} type="text" name="name" />
    </label>
    <label className='cac-street'>
      street no.
      <input onChange={e => {
        setStreetNo(e.target.value);
      }} type="text" name="name" />
    </label>
    <label className='cac-pincode'>
      Pincode
      <input onChange={e => {
        setPincode(e.target.value);
        validatePincode(e.target.value);
      }} type="number" name="name" />
    </label>
    <label className='cac-city'>
      City
      <input onChange={e => {
        setCity(e.target.value);
      }} type="text" name="name" />
    </label>
    <label className='cac-state'>
      state
      <input onChange={e => {
        setState(e.target.value);
      }} type="text" name="name" />
    </label>
    <label className='cac-select-text'>
      Blood bank
      <select onChange={e => {
        setBbId(e.target.value);
      }} id="cac-select">
      {data.length > 0 && data.map((item) => {
        return(
          <option value={item.blood_bank_id}>{item.blood_bank_name}</option>
          )
        })}

      </select>
    </label>
    <label className='cac-description'>
      Description
      <textarea onChange={e => {
        setDescription(e.target.value);
      }}  name="name" />
    </label >
    <label className='cac-slots'>
      No. of slots 
      <input onChange={e => {
        setSlots(e.target.value);
      }}  type="number" name="name" />
    </label>

    <button className='cac-button' onClick={addCamp}>Create a Camp</button>




    </>
  )
}
