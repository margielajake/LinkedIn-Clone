import { Avatar } from '@mui/material'
import React from 'react'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='flex flex-col items-center mx-2 
    cursor-pointer text-slate-500 hover:text-slate-900'>
       {Icon && <Icon />} 
       {avatar && (
        <Avatar src={avatar} />
       )}
       <h3>{title}</h3>
    </div>
  )
}

export default HeaderOption