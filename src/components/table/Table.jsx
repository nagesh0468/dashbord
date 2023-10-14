import React from 'react'
import s from './table.module.css'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
const Table = () => {
  return (
    <div className={s.container}>
        <div className={s.topContainer} >
          <div className={s.top} >
              <div>
                <span className={s.title} > Product Sell </span>
              </div>
              <div className={s.middle} >
                  <div className={s.iput} >
                  <AiOutlineSearch className={s.icons} />
                    <input type="text" placeholder='    search' className={s.text} />
                  </div>
                  <div className={s.days} >
                    <p>last 30 days <MdOutlineKeyboardArrowDown className={s.icon} /> </p>
                    
                  </div>
              </div>
            <div/>
          </div>
             <div className={s.bottom}>
                 <div>
                    <p>Product Name</p>
                 </div>
                 <div className={s.sale} >
                     <p>Stack</p>
                     <p>Stack</p>
                     <p>Stack</p>
                 </div>
             </div>
        </div>
        <div className={s.bottomContainer}>
            <div className={s.left}>
                <div className={s.first} >
                     <div className={s.image} >
                      image
                     </div>
                     <div className={s.section} >
                      <span>Abstract 3D</span>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                     </div>
                </div>
                <div className={s.first} >
                <div className={s.image} >
                      image
                     </div>
                     <div className={s.section} >
                      <span>Abstract 3D</span>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                     </div>

                </div>
            </div>
            <div className={s.right} >
                <div className={s.secund}>
                      <div>
                        <p>32 in Stack</p>
                      </div>
                      <div>
                      <h6>$ 45.99</h6>
                      </div>
                      <div>
                      <p>20</p>
                      </div>
                </div>
                <div className={s.secund}>
                <div>
                        <p>32 in Stack</p>
                      </div>
                      <div>
                      <h6>$ 45.99</h6>
                      </div>
                      <div>
                      <p>20</p>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table