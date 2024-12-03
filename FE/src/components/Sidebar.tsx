
import React from 'react'
import SidebarItem from './SidebarItem'
import TwitterIcon from './Icons/TwitterIcon'
import YoutubeIcon from './Icons/YoutubeIcon'
import BrainIcon from './Icons/BrainIcon'

const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-white fixed top-0 left-0 border border-gray-500'>
      <div className='pl-9 pt-8 flex gap-1 cursor-pointer' >
      <span className='text-red-500 font-bold text-2xl'>Second-</span><span className='text-[#420F73] font-bold text-2xl'>brain</span><span><BrainIcon/></span>
        </div>
      <div className='pt-8 pl-5'>
      <SidebarItem text='twitter' icon={<TwitterIcon/>}/>
      <SidebarItem text='youtube' icon={<YoutubeIcon/>}/>
      </div>
    </div>
  )
}

export default Sidebar