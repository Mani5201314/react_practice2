import React from 'react'
import { useState } from 'react'
import './timer.css'

const RunningTime = () => {

   let time = new Date().toLocaleTimeString();
   const [first, setFirst] = useState(time)

   function change (){
    time = new Date().toLocaleTimeString()
    setFirst(time)
   }
   setInterval(change,1000)

  return (
    <div className='main'>
        <h1>{first}</h1>
    </div>
  )
}

export default RunningTime