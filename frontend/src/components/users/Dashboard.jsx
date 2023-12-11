import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight } from "react-icons/go";
import { ImUser } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import './Users.css'
import Header from './Header';


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isBill, setIsBill] = useState(false)
    const [isOthers, setIsOthers] = useState(false)
    const [isDown, setIsDown] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
        setIsDown(!isDown)
    }
    const handleToggles = () => {
        setIsBill(!isBill)
        setIsDown(!isDown)
    }
    const handleToggled = () => {
        setIsOthers(!isOthers)
        setIsDown(!isDown)
    }
  return (
    <>
   
    <div className='dash'>
        <div className='header'>
            <p>header</p>
        </div>
        <div className='lists'>
    

           <div> 
                <Link id='listit' to='/Dash'><span> <MdSpaceDashboard /></span> DashBoard</Link>
            </div>
           <div> 
                <Link id='listit' onClick={handleToggle}><span><ImUser /></span>Account {isDown ?  <span id='down'><GoChevronDown /></span>:<span id='arrow'><GoChevronRight /></span>} </Link>
                {isOpen && (<ul id='inside' className='drop-down list'>
                <li>
                    <Link id='second'>Profile</Link>
                </li>
                <li>
                    <Link id='second'> KYC</Link>
                </li>
                <li>
                    <Link id='second'>Change Password</Link>
                </li>
                </ul>)}
            </div>
            <div>
                <Link id='listit' to='/Wallet'><span><FaWallet /></span>Fund Wallet </Link>
            </div>
            <div>
                <Link id='listit' to='/BuyData'><span><GiNetworkBars /></span>Buy Data</Link>
            </div>
            <div>
                <Link id='listit' to='/Airtime'><span><FaPhone /></span>Buy Airtime</Link>
            </div>
            <div>
                <Link id='listit' onClick={handleToggles}><span><MdElectricBolt /></span>Bills  {isDown ?  <span id='down'><GoChevronDown /></span>:<span id='arrow'><GoChevronRight /></span>}</Link>
                {isBill && (<ul id='inside' className='drop-down list'>
                <li>
                    <Link id='second'>Electricity Payment</Link>
                </li>
                <li>
                    <Link id='second'>Cable Subscription</Link>
                </li>
                </ul>)}
            </div>
            <div> 
                <Link id='listit' to='/DashBoard'><span><GrTransaction /></span>Transaction</Link>
            </div>
            <div>
                <Link id='listit' onClick={handleToggled}><span><FaLightbulb /></span>Other  {isDown ?  <span id='down'><GoChevronDown /></span>:<span id='arrow'><GoChevronRight /></span>}</Link>
                {isOthers && (<ul id='inside' className='drop-down list'>
                <li>
                    <Link id='second'>Transfer To Others</Link>
                </li>
                <li>
                    <Link id='second'>Bonus To Account</Link>
                </li>
                </ul>)}
            </div>
            </div>
        </div>

    </>
  )
}

export default Dashboard