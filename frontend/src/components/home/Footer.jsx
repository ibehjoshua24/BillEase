import React from 'react'
import './Home.css'

const Footer = () => {
  return (
    <>
        <section id='footer'>
            <div className='foottext'>
                <div>
                    <h3>BillEase</h3>
                    <p>At OneTouchPay, we are committed to making your life more convenient and enjoyable. With just one touch, you can effortlessly handle all your payments and top-ups, saving you time and effort.</p>
                    <div>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <div className="footerlist">
                        <ul>
                            <li><a href="a">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>ibehjoshua321@gmail.com</p>
                    <p>08011113333</p>
                </div>
                </div>
                <div className='copyright'>
                    <p>Copyright ©2023 One Touch Pay. All Rights Reserved</p>
                    <div className='terms'>
                        <p>Term of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Footer