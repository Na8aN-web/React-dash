import React from 'react'
import logo from '../public/logo.png'
import home from '../public/icons/home.png'
import team from '../public/icons/team.png'
import task from '../public/icons/task.png'
import calendar from '../public/icons/calendar.png'
import report from '../public/icons/report.png'
import settings from '../public/icons/settings.png'
import logout from '../public/icons/log-out.png'
import hamburger from '../public/icons/more.png'
import close from '../public/icons/close.png'
import '../components/Sidebar.css'

function Sidebar() {
    const [openSide, setOpenside] = React.useState(true)
  return (
    <div className={openSide?'sidebar':'sidebar2'}>
        <img src={openSide? hamburger: close} alt='hamburger' onClick={()=>setOpenside(!openSide)} className='menu'/>
        <div className={openSide?'container':'contained'}>
        <div className='logo'>
        <img src={logo} alt='logo' className='logo-image'/>
        </div>
        <div className='sidebar-buttons'>
            <ul className='sidebar-lists'>
                <li className='list-items'><img src={home} alt='Home'/> Home</li>
                <li className='list-items'><img src={team} alt='team'/> My Team</li>
                <li className='list-items'><img src={task} alt='task'/> Task</li>
                <li className='list-items'><img src={calendar} alt='calendar'/> Calendar</li>
                <li className='list-items'><img src={report} alt='report'/> Report</li>
                <li className='list-items'><img src={settings} alt='settings'/> Settings</li>
                <li className='log-list-items'><img src={logout} alt='logout'/> Logout</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar