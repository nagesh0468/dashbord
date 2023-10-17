import React from 'react'
import s from './sidenav.module.css'
import {TbHexagonLetterD} from 'react-icons/tb'
import {MdOutlineNavigateNext, MdOutlineSmsFailed, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiFillCodeSandboxSquare} from 'react-icons/ai'
import {BiSolidUserRectangle} from 'react-icons/bi'
import {CiWallet} from 'react-icons/ci'
import {LuBadgePercent} from 'react-icons/lu'
const SideNav = () => {
    const navNames = [
        {
            id : 1,
            name : 'Products',
            icon : <AiFillCodeSandboxSquare/>,
        },
        {
            id : 2,
            name : 'Customers',
            icon : <BiSolidUserRectangle/>,
        },
        {
            id : 3,
            name : 'Income',
            icon : <CiWallet/>,
        },
        {
            id : 4,
            name : 'Promote',
            icon :  <LuBadgePercent/>,
        },
        {
            id : 5,
            name : 'Help',
            icon :  <MdOutlineSmsFailed/>,
        },
        

    ]
    
  return (
    <div className={s.container} >
        <div>
        <h3 className={s.logo}> <TbHexagonLetterD className={s.icon} />  Dashboard</h3>
        </div>
        <div className={s.navMenu}>
            <div className={s.navlogo}>
            <h6 > <TbHexagonLetterD className={s.icon} /><span className={s.hiddenMobileView} > Dashboard </span> </h6>

            {
               navNames && navNames.map((el) => 
                 
                (
                    
                    <ul key={el.id}>
        
                        <li> <span className={s.icon}>{el.icon}</span>  <span className={s.hiddenMobileView}>{el.name}</span><MdOutlineNavigateNext className={s.next} /></li>
                    </ul>
                ) )
            }
            </div>
          <div className={s.profile} >
            <div className={s.profileImg}>
                <img src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png" alt="avatar" width='100%' height='100%' />
            </div>
            <div className={s.profileData} >
                <div className={s.about}>
                    <h6>Nagesh</h6>
                    <p>Product Maneger</p>
                </div>
                <div className={s.profileIcon} > 
                <MdOutlineKeyboardArrowDown />
                </div>
            </div>
            
         </div>
        </div>
    </div>
  )
}

export default SideNav