import React from 'react'

function TileElement() {
  return (
    <div className='tile-element'>
        <h1 className="tile-title">Title</h1>
        <p className='tile-addr'>Address</p>
        <h3 className='tile-stock'>Stock</h3>
        {/* <label htmlFor="req">Request</label> */}
        <input type="text" name="req" id="" className='req'/>
    </div>
  )
}

export default TileElement