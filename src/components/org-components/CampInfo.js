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

export default function CampInfo(props) {
    const params = useParams()
    const id = params.id;
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
       
    <div className='person-tile-box'>
    <PersonTile />
    <PersonTile />
    <PersonTile />
    <PersonTile />
    <PersonTile />
    </div>

    <div className='cit-ap'>
        <img src={apos} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-an'>
        <img src={aneg} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-bp'>
        <img src={bpos} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-bn'>
        <img src={bneg} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-abp'>
        <img src={abpos} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-abn'>
        <img src={abneg} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-op'>
        <img src={opos} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>
    <div className='cit-on'>
        <img src={oneg} alt="" className='ap'/>
        <p className='stock-ap'>10L</p>
    </div>

    </>
  )
}
