import React from 'react'
import Header from '../../Layout/header'
import Footer from '../../Layout/footer'
import bannerImg from '../../images/bannerImg.svg'
import './style.css'
const HomePage = () => {
  return (
    <>
      <Header />

      <section>
        <div className="page_width">
          <div className="WelcomeBanner">
            <div className="leftBanner">
              <h3>Best in Dubai</h3> 
              <h2>Welcome To</h2>
            
                <h1>Home <span>Comfort</span></h1>
                <p>Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
                </p>
              <div className="contact_learn_more">
                <a href="/"><button className="contact">Contact Us</button></a>
               <a href="/"> <button className="learn_more"> Learn More</button></a>
              </div>
            </div>
            <div className="rightImageBanner">
              <div className="bannerImg"><img src={bannerImg} alt="" /></div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default HomePage