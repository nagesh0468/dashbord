import React from 'react'
import s from './cards.module.css'
import { dollar } from '../utils/CardItems'
import {BiDownArrowAlt} from 'react-icons/bi'

const cards = () => {

    
  return (
    <div className={s.container} >

        {
          dollar && dollar.map((el) => (
            <div className={s.cards} key={el.id} >
                <div className={s.icons} >
                      {el.icons}
                </div>
                <div className={s.rupees} >
                    <p>{el.earnings}</p>
                    <span className={s.dollar} >{el.rupees}</span>
                    <p className={s.month} ><span className={ `${el.arrows && <BiDownArrowAlt/> }  ? ${s.decrease} : ${s.increase}`} >{el.arrows}{el.amount}</span>this month</p>
                </div>
            </div>
    

            ))
        }
              
    </div>
  )
}

export default cards