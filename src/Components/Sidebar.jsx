import { Avatar } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="" alt="" />
            <Avatar />
            <h2>Jake Campbell</h2>
            <p>Graphics Designer. Team Lead. Web Developer.</p>
        </div>
        <div className="sidebar-stats">
            <div className="sidebar-stat"></div>
            <div className="sidebar-stat"></div>
        </div>

    </div>
  )
}

export default Sidebar