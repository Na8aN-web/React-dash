import React from 'react'
import Analysis from './Analysis'
import '../components/Section.css'

function Section() {
  return (
    <div className='sect-contain'>
    <div className='section-page'>
        <Analysis />
        <Analysis /> 
    </div>
    <div className='section-page'>
        <Analysis />
        <Analysis />
    </div>
    </div>
  )
}

export default Section