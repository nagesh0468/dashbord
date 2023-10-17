import React from 'react'
import s from './table.module.css'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
const Table = () => {
  return (
    <div className={s.container} >
          <div className={s.top}>
            <div>
              <h5>Product Sell</h5>
               <p className={s.color} >Product Name</p>
            </div>
            <div>
              <div className={s.text} > 
                <div className={s.text2}>
                  <AiOutlineSearch className={s.icon} />
                <input type="text" placeholder='    Search' />
                     <p>Last 30 days <MdOutlineKeyboardArrowDown className={s.icons} /> </p>
                </div>
                    
                     <div className={s.text1} >
                      <p >stock</p>
                      <p>Total</p>
                      <p>Price</p>
                     </div>
              </div>
             
            </div>
          </div>


          <div className={s.bottom} >
            <div className={s.btop} >
              <div>
                   <div className={s.image}></div>
                      <div className={s.data}>
                        <div>
                           <span>Abstract 3D</span>
                        </div>
                        <div>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        
                       </div>
               </div>
              
              <div>
                <div className={s.number} >
                  <p>2</p>
                  <p>2</p>
                  <p>2</p>
                </div>
              </div>

            </div>
            <div className={s.btop}>
            <div>
                   <div className={s.image}></div>
                      <div className={s.data}>
                         <span>Abstract 3D</span>
                          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                       </div>
               </div>
              
              <div>
                <div className={s.number} >
                  <p>2</p>
                  <p>2</p>
                  <p>2</p>
                </div>
              </div>


            </div>

          </div>

           
    </div>
  )
}

export default Table