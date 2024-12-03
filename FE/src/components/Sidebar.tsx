
import React from 'react'
import SidebarItem from './SidebarItem'
import TwitterIcon from './Icons/TwitterIcon'
import YoutubeIcon from './Icons/YoutubeIcon'

const Sidebar = () => {
  return (
    <div className='h-screen w-72 bg-white fixed top-0 left-0 border border-gray-500'>

      <div className='pt-8 pl-4'>
      <SidebarItem text='twitter' icon={<TwitterIcon/>}/>
      <SidebarItem text='youtube' icon={<YoutubeIcon/>}/>
      </div>
    </div>
  )
}

export default Sidebar