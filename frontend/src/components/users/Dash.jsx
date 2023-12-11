import React from 'react'
import Dashboard from './Dashboard'
import '../users/Users.css'
import Header from './Header'


const Dash = () => {
  return (
    <>

    <Header
    name="DashBoard"
    />
    <Dashboard/>
    <div className='sides'>
    <div className='side1'> 
        <div className='fund'><a href="/Wallet">
        <p>Fund Wallet</p>
        </a></div>
        <div className='dashtext'> 
        <div>
            <h2>Welcome <span>Jonathan</span></h2>
            <h5>SMART EARNER</h5>
        </div>
            <div>
                <h2><i></i> <span>500,000.00</span></h2>
                <p>WALLET BALANCE</p>
                <div className='wallet'>
                    <span id='wallex'>Wallet Balance</span>
                    <span id='wallex'>Bonus</span>
                </div>
            </div>
        </div>
        </div>

    </div>
    
    </>
  )

}

export default Dash