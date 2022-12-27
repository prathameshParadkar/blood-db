import axios from 'axios'
import React from 'react'

function TileElement(props) {
  const [quantity, setQuantity] = React.useState(0.0)
  const requestHandler = (e) => {
    setQuantity(e.target.value)
  }
  const requestSubmit = (e) => {
    if(quantity){
      if(props.stock < quantity){
        alert("quantity requested not available!!!")
      }
      else{
        axios.post(`http://localhost:5000/blood-banks/${props.id}`, {
           quantity,
           bloodgroup : props.bloodgroup,
           person_id : localStorage.getItem("userId")
        })
        .then(res => {
          if(res.data.isDone){
            window.location.reload()
            alert("Request successful!!!");
          }
        })
        .catch( e => {
          console.log(e)
        })
      }
    }
  }
  
  return (
    <div className='receive-element'>
        <h1 className="receive-title">{props.name}</h1>
        <p className='receive-addr'>
        {`${props.place}, ${props.street}, Pincode : ${props.pincode}, ${props.city}, ${props.state}`}
        </p>
        <h3 className='receive-stock'>Stock for {props.bloodgroup}</h3>
        <h3 className='receive-stock-actual'>{`${props.stock}L`}</h3>
        <p className='receive-request'>Request</p>
        <input type="number" step="0.1" className='receive-request-actual' onChange={requestHandler}/>
        <button className='receive-tick'  onClick={requestSubmit}>&#10003;</button>
     </div>
  )
}

export default TileElement