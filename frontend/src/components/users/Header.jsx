import React, { useState } from 'react'
import user from '../../../public/images/first.png'
import user1 from '../../../public/images/second.png'

const Header = ({name}) => {
  const [view, setView] = useState(false)

  function open() {
      setView(!view)
  }
  return (
    <div>
        <nav className='nav'>
            <img id='user' src={user} alt="" />

            <h2>{name}</h2>
           <div className='signout'>
           {view &&<p>Sign-Out</p>}
            <img id='user' 
            src={user1} 
            alt=""
            onClick={open}
             />
             
             </div>
        </nav>
    </div>
  )
}

export default Header