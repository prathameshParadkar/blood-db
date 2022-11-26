import axios from 'axios'
import React from 'react'

export default function PersonTile(props) {
  const [data, setData] = React.useState('')
  const donated = () => {
    axios.post('http://localhost:5000/blood-donated', {
      person_id : props.id,
      camp_id : props.camp_id,
      bloodgroup : props.bloodgroup
    })
    .then((res) => {
      setData("done")
      window.location.reload()
    })
    .catch(e => {
      console.log(e)
    })
  }

  return (
    
    <>
    <div className='cit-box'>
        <p className='cit-slot-no'>{props.slot_no}</p>
        <p className='cit-name'>{props.name}</p>
        <p className='cit-blood-grp'>{props.bloodgroup}</p>
        <button className='cit-tick' onClick={donated}>&#10003;</button>
    </div>

    </>
  )
}
