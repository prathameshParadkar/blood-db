import React from 'react'
import { Navigate } from 'react-router'

export default function CampTile(props) {
    const [redirect, setRedirect] = React.useState('')
    const [id, setId] = React.useState(0)
    let date = props.date.slice(0, props.date.indexOf('T'));
    const toCampInfo = (e) => {
        setRedirect(`/organization/camps/${props.id}`)
    }
    if(redirect){
        return <Navigate to={{ pathname: `${redirect}` }} />
    }

    

  return (
    <div className='tile-container' >
        <div className='org-camp-title' onClick={toCampInfo}>
            {props.name} 
        </div>
        <p className='tile-org-name' > </p>
        <div className='tile-date'>
            <div className='tile-date-date'>Date</div>
            <div className='tile-date-actual'>{date}</div>
        </div>
        <div className='tile-time'>
            <div className='tile-time-time'>Time</div>
            <div className='tile-time-actual'>{props.time}</div>
        </div>
        <div className='tile-location'>
            <div className='tile-location-location'>Location</div>
            <div className='tile-location-actual'>
                {`${props.place}, ${props.street}, Pincode : ${props.pincode}, ${props.city}, ${props.state}`}
                </div>
        </div>
        <div className='tile-slots'>
            <p className='tile-slots-no' style={{color : "black"}}>{`${props.slots_total - props.slots_left}/${props.slots_total}`}</p>
            <p className='tile-slots-msg' style={{color : "black"}}>registered</p>
        </div>
        
    </div>
  )
}
