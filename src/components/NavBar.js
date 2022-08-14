import React from 'react'
import '../components/NavBar.css'
import search from '../public/icons/search.png'
import notify from '../public/icons/notifications.png'
import profile from '../public/icons/profile-pic.png'
import drop from '../public/icons/drop-arrow.png'

function Navbar() {
  return (
    <div className='navbar'>
      
        <h2 className='navbar-header'>Dashboard</h2>
        <div className='profile-icons'>
            <img src={search} alt='search' className='icon-pics'/>
            <img src={notify} alt='notification' className='icon-pics'/>
            <img src={profile} alt='profile-pic' className='icon-pics'/><span><img style={{paddingLeft: "5px"}} src={drop} alt='drop' /></span>
        </div>
    </div>
  )
}

export default Navbar