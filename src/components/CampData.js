import React from 'react'
import Navbar from './Navbar'
import orgLogo from './images/org.png'
import { Navigate, useParams } from 'react-router'
import axios from 'axios'

export default function CampData(props) {
    const [data, setData] = React.useState([])
    const [buttonDisable, setButtonDisable] = React.useState(false)
    const [buttonText, setButtonText] = React.useState("Book slot")
    const [redirect, setRedirect] = React.useState('')
    const [user, setUser] = React.useState('')
    const [userId, setUserId] = React.useState('')
    const params = useParams()
    const id = params.id;

    React.useEffect(() => {
        axios.get(`http://localhost:5000/camp-info/${id}`)
        .then(res => {
            for(let item of res.data.results2){
                if (item.person_id === props.id){
                    setButtonDisable(true)
                    setButtonText("Already Booked");
                    break;
                }
            }
            console.log(res.data)
            setData(res.data);
            
        })
        .catch(e => {
            console.log(e)
        })
    }, [])

    
    const regInCamp = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/camp-reg", {
            person_id: props.id,
            camp_id : data.camp_id,
            blood_donated : 500,
            slot_no : (data.camp_slots_total - data.camp_slots_remaining + 1),
            slot_left : data.camp_slots_remaining - 1
        })
        .then( res => {
            console.log(res.data)
            if(res.data.isBooked){
                setRedirect("/person/donate")
            }
            else{
                alert(res.data.msg)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
    if(redirect){
        return <Navigate to={{ pathname: `${redirect}` }} />
      }

  return (
      <>
        < Navbar 
        flink = "Donate"
        flinkTo = "/person/donate"
        flinkStyle = {{color : "red", textDecoration : "underline solid red"}}
        slink = "Recieve"
        slinkTo = "/person/recieve"
        slinkStyle = {{}}
        />
        <div>
            <img src={orgLogo} className="camp-data-img" alt="" />
            <div>
                <p className='camp-data-name'>Name : </p>
                <p className='camp-data-title'>{data.camp_name}</p>
            </div>
            <div>
                <p className='camp-data-orgBy'>Organized by :</p>
                <p className='camp-data-orgName'>{data.organizer_name}</p>
            </div>
            <div>
                <p className='camp-data-date'>Date :</p>
                <p className='camp-data-date-actual'>{`${data.camp_date}`.slice(0, `${data.camp_date}`.indexOf('T'))}</p>
            </div>
            <div>
                <p className='camp-data-time'>Time :</p>
                <p className='camp-data-time-actual'>{data.camp_timing}</p>
            </div>
            <div>
                <p className='camp-data-location'>Location :</p>
                <p className='camp-data-location-actual'>{`${data.camp_place}, ${data.camp_street}, Pincode : ${data.camp_pincode}, ${data.camp_city}, ${data.camp_state}`}</p>
            </div>
            <div>
                <p className='camp-data-description'>Description :</p>
                <p className='camp-data-description-actual'>{data.description}</p>
            </div>
            <div>
                <p className='camp-data-slots'>{`${data.camp_slots_remaining} slots left`}</p>
                <button className='camp-data-button' disabled = {buttonDisable} onClick={regInCamp}>{buttonText}</button>
            </div>
        </div>
    </>
  )
}
