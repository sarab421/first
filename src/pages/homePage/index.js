import React from 'react'
import Header from '../../Layout/header'
import Footer from '../../Layout/footer'
import bannerImg from '../../images/bannerImg.svg'
import serviceHours from '../../images/twenty-four-hours-sevice.svg'
import price from '../../images/resonable-price.svg'
import team from '../../images/experienced-team.svg'
import Img_who_we_are from '../../images/who_we_are.svg'
import Components from './componenets'
import './style.css'
const HomePage = () => {
  return (
    <>
      <Header />

      <section className='banner_section'>
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
      <section className='after_welcome_banner_section'>
        <div className="page_width">
          <div className="after_banner_section">
            <div className="icons_after_banner_section">
              <div className="img_serice_hour"> <img src={serviceHours} alt="" /></div>
              <h2>24/7 Service</h2>
            </div>
            <div className="icons_after_banner_section">
              <div className="img_serice_hour"> <img src={price} alt="" /></div>
              <h2>Reasonable Rates</h2>
            </div>
            <div className="icons_after_banner_section">
              <div className="img_serice_hour"> <img src={team} alt="" /></div>
              <h2>Experienced Team</h2>
            </div>

          </div>
        </div>
      </section>

      <section className='explore_our_services'>
        <div className="page_width">
          <div className="our_services_section">
            <h2>Explore our <span>Services</span></h2>
            <Components/>
          </div>
        </div>
      </section>


      <section>
        <div className="page_width">
          <div className="who_we_are">
            <div className="left_banner"><div className="who_we_are_img_container"><img src={Img_who_we_are} alt="" /></div></div>

            <div className="right_banner">
              <h2>Who we <span>Are?</span></h2>
              <p>Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience. Our experts will give you the most satisfying experience and professionalism. On your demand, all of our best home maintenance and renovation services are available at the very right time and place.</p>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage