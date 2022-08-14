import React from 'react';
import NavBar from './NavBar';
import Section from './Section';
import Bar from './Bar'
import Team from '../components/Team'
import Member from '../components/Member'
import '../components/Main.css'

function Main() {
  return (
    <div className='main-page'>
        <NavBar />
        <div className='upper'>
        <Section />
        <Bar />
        </div>
        <div className='lower'>
          <Team />
          <Member />
        </div>
    </div>
  )
}

export default Main