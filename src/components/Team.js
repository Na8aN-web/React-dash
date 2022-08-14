import React from 'react'
import '../components/Team.css'
import blueDrop from '../public/icons/blue-drop.png'
import Curve from '../public/icons/new-curve.png'
import Blues from '../public/icons/blue-dots.png'
import Group from '../public/icons/group.png'

function Team() {
  return (
          <div className='ana-container3'>
        <div className='heading3'>
            <h4>Activities</h4>
            <div className='details'>
            <div>6 Months<span><img src={blueDrop} alt='dots' /></span> </div>
            <div><img src={Blues} alt='dots' /></div>
            </div>
        </div>
        <div className='body3'>
        <div className="team-container">
        <div className="tooltip"><img src={Curve} alt='graph' className='image-one image'/>
            <div className="tooltiptext">
                <h4>Project meeting with</h4>
                <img src={Group} alt='group' />
            </div>
        </div>
            
        </div>
          
        </div>
    </div>
    
  )
}

export default Team