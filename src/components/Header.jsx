import React, { useState } from 'react';
import logo from '../assets/images/logo.webp';
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2';
import { HiPlus,HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';
import profile from '../assets/images/profile-user.png';

function Header() {
  const [toggle,setToggle] = useState(false);
  const menu = [
    { 
      name : 'HOME',
      icon : HiHome,
    },
    {
      name : 'SEARCH',
      icon : HiMagnifyingGlass,
    },
    {
      name : 'MOVIES',
      icon : HiPlayCircle,
    },
    {
      name : 'SERIES',
      icon : HiTv,
    },
    {
      name : 'WATCH LIST',
      icon : HiPlus,
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
  ];
  return (
    <div className='flex items-center justify-between p-5' >
      <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] object-cover'/> 
        <div className='hidden md:flex gap-8 '>
          {menu.map((item,index) => (<HeaderItem name={item.name} Icon={item.icon}/>))}
        </div>

        <div className='flex gap-8 md:hidden'>
          {menu.map((item,index) => index < 3 && (<HeaderItem name={''} Icon={item.icon}/>))}
        </div>
        <div className='flex gap-8 md:hidden' onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical}/>
          { toggle ? <div className='absolute mt-7 border-[1px] p-3 border-gray-700 px-5 py-4'>
            {menu.map((item,index) => index > 2 && (<HeaderItem name={item.name} Icon={item.icon}/>))}
          </div> : null 
          }
        </div>

      </div>

      <img src={profile} className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header;