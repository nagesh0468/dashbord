import React from 'react'
import s from './cards.module.css'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {GrDocumentText} from 'react-icons/gr'
import {BiWalletAlt,BiUpArrowAlt,BiDownArrowAlt} from 'react-icons/bi'
import {BsFillBagFill} from 'react-icons/bs'
import {HiDocumentText} from 'react-icons/hi'
const cards = () => {

    const dollar = [
        {
            id : 1,
            icons :<RiMoneyDollarCircleFill />,
            earnings : 'Earning',
            rupees : '$198k',
            amount : '37.8%',
            arrows : <BiUpArrowAlt/>,
        },
        {
            id : 2,
            icons :<HiDocumentText />,
            earnings : 'Orders',
            rupees : '$2.4k',
            amount : '2%',
            arrows : <BiDownArrowAlt/>,
        },
        {
            id : 3,
            icons : <BiWalletAlt />,
            earnings : 'Balance',
            rupees : '$2.4k',
            amount : '2%',
            arrows : <BiDownArrowAlt/>,
        },
        {
            id : 4,
            icons : <BsFillBagFill />,
            earnings : 'Total sales',
            rupees : '$89k',
            amount : '11%',
            arrows : <BiUpArrowAlt/>,
        }
    ]

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
                    <p><span className={ `${el.arrows && <BiDownArrowAlt/> }  ? ${s.decrease} : ${s.increase}`} >{el.arrows}{el.amount}</span> this month </p>
                </div>
            </div>
    

            ))
        }
              
    </div>
  )
}

export default cards