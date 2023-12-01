import React from 'react'
import Greet from './Greet'
import bg from "../Pictures/mainbg.png"

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <img className='main_bg' alt='bg' src={bg}></img>
        <Greet />
      </div>
    </div>
  )
}

export default Main