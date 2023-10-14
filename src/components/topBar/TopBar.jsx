import React from 'react'
import s from './topBar.module.css'
import {AiOutlineSearch} from 'react-icons/ai'


const TopBar = () => {
  return (
    <div className={s.container}>
      <div>
        <h5>Hello Shahrukh👋</h5>
      </div>
      <div>
        <span>
        <AiOutlineSearch className={s.icon} />
        < input type="text" placeholder='     Search' />
        </span>
        
      </div>
    </div>
  )
}

export default TopBar