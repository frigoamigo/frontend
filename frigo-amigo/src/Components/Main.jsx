import React from 'react'
import MainNavs from './MainNavs'
import Greet from './Greet'

const Main = () => {
  return (
    <div className='main'>
      <div className='main_bg'></div>
        <MainNavs />
        <Greet />
    </div>
  )
}

export default Main