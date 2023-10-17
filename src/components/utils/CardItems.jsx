import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {BiWalletAlt,BiUpArrowAlt,BiDownArrowAlt,BiSolidUserRectangle} from 'react-icons/bi'
import {BsFillBagFill} from 'react-icons/bs'
import {HiDocumentText} from 'react-icons/hi'
import {AiFillCodeSandboxSquare} from 'react-icons/ai'
import {CiWallet} from 'react-icons/ci'
import {LuBadgePercent} from 'react-icons/lu'
import {MdOutlineSmsFailed} from 'react-icons/md'

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
];

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



export {dollar,navNames}