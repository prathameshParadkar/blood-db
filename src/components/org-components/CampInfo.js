import React from 'react'
import { useParams } from 'react-router';
import Navbar from '../Navbar'
import PersonTile from './PersonTile';
import apos from '../images/Apos.png'
import aneg from '../images/Aneg.png'
import bpos from '../images/Bpos.png'
import bneg from '../images/Bneg.png'
import abpos from '../images/ABpos.png'
import abneg from '../images/ABneg.png'
import opos from '../images/Opos.png'
import oneg from '../images/Oneg.png'
import axios from 'axios';

export default function CampInfo(props) {
    const [data, setData] = React.useState([])
    const [data2, setData2] = React.useState([])
    const params = useParams()
    const id = params.id;
    const compare = (a, b) => {
        if ( a.slot_no < b.slot_no ){
            return -1;
          }
          if ( a.last_nom > b.last_nom ){
            return 1;
          }
          return 0;
    }
    React.useEffect(() => {
        axios.post('http://localhost:5000/org-person-info', {
            camp_id : id,
        })
        .then((res) => {
            setData(res.data.personData.sort(compare))
            setData2(res.data.bloodgrpData)
           
        })
        .catch((e) =>{
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
    <p className='camp-info-name'>Camp Name</p>
    <p className='camp-info-DL'>Donors list</p>

    <input type="text" id='camp-info-search' placeholder='search'/>
       <button className='end-event'>End event</button>
    <div className='person-tile-box'>
    {data.length > 0 && data.map((item) => {
          return (
            <>
            <PersonTile 
            key = {item.person_id}
            camp_id = {parseInt(id)}
            id = {item.person_id}
            name = {item.person_name}
            bloodgroup = {item.person_bloodgroup}
            slot_no = {item.slot_no}
            />
            </>
          )
        })}
    
    </div>

    <div className='cit-ap'>
        <img src={apos} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["A+"]} L`}</p>
    </div>
    <div className='cit-an'>
        <img src={aneg} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["A-"]} L`}</p>
    </div>
    <div className='cit-bp'>
        <img src={bpos} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["B+"]} L`}</p>
    </div>
    <div className='cit-bn'>
        <img src={bneg} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["B-"]} L`}</p>
    </div>
    <div className='cit-abp'>
        <img src={abpos} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["AB+"]} L`}</p>
    </div>
    <div className='cit-abn'>
        <img src={abneg} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["AB-"]} L`}</p>
    </div>
    <div className='cit-op'>
        <img src={opos} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["O+"]} L`}</p>
    </div>
    <div className='cit-on'>
        <img src={oneg} alt="" className='ap'/>
        <p className='stock-ap'>{`${data2["O-"]} L`}</p>
    </div>

    </>
  )
}
