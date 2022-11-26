import React, { useState } from 'react'
import logo from "../logo.png";
import TileInfo from './TileInfo';
import TileElement from './TileElement';

function Home() {
  const [renderInfo, setRenderInfo] = useState(false);

  return (
    <>
    <img src={logo} alt="Blood-db" className="heading"/>
    <input type="text" className='search' placeholder='Search'/>
    <div>
    <button className='tile'><TileElement /></button>
    <button className='tile'><TileElement /></button>
    <button className='tile'><TileElement /></button>
    </div>
    {renderInfo && <TileInfo />}
    </>
  )
}

export default Home