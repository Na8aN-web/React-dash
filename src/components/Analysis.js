import React from 'react'
import Dots from '../public/icons/dots.png'
import Ellipse from '../public/icons/ellipse.png'
import '../components/Analysis.css'

function Analysis() {
  return (
    <div className='ana-container'>
        <div className='heading'>
            <h4>Heading</h4>
            <img src={Dots} alt='dots' /> 
        </div>
        <div className='body'>
            <div className='digits'>
                <img src={Ellipse} alt='ellipse' /><span>80%</span>
            </div>
            <div className='works'>
                <h4>67</h4>
                <p>Works today</p>
            </div>
        </div>
    </div>
  )
}

export default Analysis