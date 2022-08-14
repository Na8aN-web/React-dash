import React from 'react'
import Blue from '../public/icons/blue-box.png'
import Yellow from '../public/icons/yellow-box.png'
import '../components/Bar.css'
import blueDrop from '../public/icons/blue-drop.png'
import Graph from '../components/Graph'
import Blues from '../public/icons/blue-dots.png'

function Bar() {
  return (
          <div className='ana-container2'>
        <div className='heading2'>
            <h4>Activities</h4>
            <div className='details'>
            <div><img src={Blue} alt='dots' /> <span style={{fontSize:'10px'}}>Recieved</span></div>
            <div><img src={Yellow} alt='dots' /> <span style={{fontSize:'10px'}}>Completed</span></div>
            <div style={{fontSize:'10px'}}>6 Months<span><img src={blueDrop} alt='dots' /></span> </div>
            <div><img src={Blues} alt='dots' className='attach'/></div>
            </div>
        </div>
        <div className='body2'>
            <Graph />
            <Graph />
            <Graph />
            <Graph />
            <Graph />
            <Graph />
        </div>
    </div>
    
  )
}

export default Bar