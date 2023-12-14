import './App.css'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import SplashSreen from '../src/components/SplashSreen'
import { useEffect, useState } from 'react'
import Dash from './components/users/Dash'
import Wallet from './components/FundWallet/Wallet'
import Buydata from './components/buydata/Buydata'
import Airtime from './components/Airtime/Airtime'
import PayOnline from './components/FundWallet/PayOnline'
import ResetPassword from './components/Login/ResetPassword'




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 2000)
  }, []);

  return (
    <>
     {/* <div>
                {loading ?<SplashSreen/> : <Home/>}
            </div>  */}
       <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/SignUp' element={<SignUp/>}></Route>
       <Route path='/Dash' element={<Dash/>}></Route>
       <Route path='/Wallet' element={<Wallet/>}></Route>
       <Route path='/BuyData' element={<Buydata/>}></Route>
       <Route path='/Airtime' element={<Airtime/>}></Route>
       <Route path='/PayOnline' element={<PayOnline/>}></Route>
       <Route path='/Reset_Password' element={<ResetPassword/>}></Route>
       
       </Routes>
    </>
  )
}

export default App
