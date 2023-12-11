import React from 'react'
import mainImage from '../../../public/images/myprojectimage.png'
import secondImage from '../../../public/images/ambition.png'
import ourmission from '../../../public/images/ourmission.png'
import ourvision from '../../../public/images/ourvision.png'
import ourbeliefs from '../../../public/images/ourbeliefs.png'
import goals from '../../../public/images/goals.png'
import './Home.css'
import Footer from './Footer'

import NavBar from './NavBar'

const Home = () => {
   

  return (
    <div>
        <main>  
           
            <NavBar/>
            <section id='home'>
                <div className='home'>
                <div className='hometext'>
                <h1>Welcome To BillEase</h1>
                <p>the most convenient Utility & Bill Payment platform where you can effortlessly   manage and pay all your utility bills in one place.
                </p>
                <div>
                    <a href="/SignUp"><button id='btn2'>Get started</button></a>
                    <a href="/Login"><button id='btn2'>Login</button></a>
                </div>
                </div>
                
                    <img className='img1' src={mainImage} alt="" />
        
                </div>
            </section>
            <section id='About'>
            <div className='about'>
             <img className='img2' src={secondImage} alt="" />
             <div className='abouttext'>
                <h1>Best Utility App In Nigeria</h1>
                <p>At BillEase, we are committed to making your life more convenient and enjoyable. Our wide array of services covers everything you need to stay connected, entertained, and on top of your utility bills. With just one touch, you can effortlessly handle all your payments and top-ups, saving you time and effort.</p>
                    <div className='car'>
                        <div className='car1'>
                            <h3>94k</h3>
                            <p>Customer Satisfaction</p>
                        </div>
                        <div className='car1'>
                            <h3>205M</h3>
                            <p>Monthly active users</p>
                        </div>
                        <div className='car1'>
                            <h3>100k</h3>
                            <p>New Users per week</p>
                        </div>
                    </div>
             </div>
             </div>
            </section>
            <section id='service'>
                <div className='servicetext'>
                    <h2>Our Services</h2>
                    <p>Pay all your bills at once, without leaving your home with <br/> BillPoint's comprehensive range of services.</p>
                </div>

                <div className='aboutcard'>
                    <div id='aboutcard1'>
                        <i></i>
                        <h4>Electricity Bills</h4>
                        <p>No more long queues or last-minute rushes to pay your electricity bill. With BillEase, you can conveniently pay your electricity bill from the comfort of your home or office, ensuring a continuous supply of power without any hassle.</p>
                    </div>
                    <div id='aboutcard1'>
                        <i></i>
                        <h4>Utility Bill Payment</h4>
                        <p>Say goodbye to the stress of keeping track of multiple utility bills. With BillEase, you can effortlessly pay your electricity, water, gas, and other utility bills with just one touch</p>
                    </div>
                    <div id='aboutcard1'>
                        <i></i>
                        <h4>Airtime Purchases</h4>
                        <p>Topping up your mobile phone has never been easier. Whether you need to make urgent calls or stay connected with loved ones, BillEase allows you to instantly purchase airtime for any mobile network, so you're always in touch.</p>
                    </div>
                    <div id='aboutcard1'>
                        <i></i>
                        <h4>Cable TV Subscription</h4>
                        <p>Keep up with your favorite shows and never miss an episode again. BillEase enables you to easily subscribe and renew your cable TV services, granting you access to a wide range of entertainment at your fingertips.</p>
                    </div>
                    <div id='aboutcard1'>
                        <i></i>
                        <h4>Data Purchase</h4>
                        <p>Stay connected and surf the internet without interruption. Top up your data plan with BillEase and enjoy seamless browsing, streaming, and socializing online, all with a single touch.</p>
                    </div>
                    <div id='aboutcard1'>
                        <i></i>
                        <h4>Betting</h4>
                        <p>Feeling lucky? BillEase lets you indulge in the thrill of betting, offering a seamless and secure platform for placing your bets and testing your luck on various sports and games.</p>
                    </div>
                </div>
            </section>
            <section id='choice'>
                <div className='choiceText'>
                    <h2>Why Choose Us</h2>
                    <p>BillEase is a reliable vending platform to make airtime recharges, data <br/> bundles purchase and payment of utility bills in Nigeria.</p>
                </div>
                <div className='choices'>
                    <div id='choicecard'>
                        <img id='choiceimg' src={ourmission} alt="" />
                        <div>
                            <h3>Our Mission</h3>
                            <p>To be an excellent service provider in the telecommunication industry. We seek avenues to add value to our customers and the entire Nigeria.</p>
                        </div>
                        </div>
                        <div id='choicecard'>
                        <img id='choiceimg' src={ourbeliefs} alt="" />
                        <div>
                            <h3>Our Beliefs</h3>
                            <p>At BillEase: Customer first. Therefore, we consistently seek avenues to make our partners and customers enjoy affordable and excellent delivery service at their comfort zone.</p>
                        </div>
                        </div>
                        <div id='choicecard'>
                        <img id='choiceimg' src={ourvision} alt="" />
                        <div>
                            <h3>Our Vision</h3>
                            <p>We aim to grow wider efficiently and adequately to make the world of technology easier for our partners and customers by the grace of God. Like they say "DATA IS LIFE!".</p>
                        </div>
                        </div>
                        <div id='choicecard'>
                        <img id='choiceimg' src={goals} alt="" />
                        <div>
                            <h3>Our Goals</h3>
                            <p>To bring Easy life to our esteemed customer`s through VTU.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact'>
                <div className='contacttext'>
                    <h2>Need Help?</h2>
                    <p>Queries, complaints and feedback. We will be happy to serve you</p>
                </div>
                <div className='contactcard'>
                    <div id='contactcards'>
                        <i></i>
                        <h3>Call Now</h3>
                        <p>08011113333</p>
                    </div>
                    <div id='contactcards'>
                        <i></i>
                        <h3>Email Address</h3>
                        <p>ibehjoshua321@gmail.com</p>
                    </div>
                    <div id='contactcards'>
                        <i></i>
                        <h3>Location</h3>
                        <p>gomycode lagos</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    </div>
  )
}

export default Home