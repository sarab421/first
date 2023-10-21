import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/footer";
import bannerImg from "../../images/bannerImg.svg";
import serviceHours from "../../images/twenty-four-hours-sevice.svg";
import price from "../../images/resonable-price.svg";
import team from "../../images/experienced-team.svg";
import Img_who_we_are from "../../images/who_we_are.svg";
import Components from "./componenets";
import Ac_service_img from "../../images/Ac_service_img.png";
import dusk_cleaning from "../../images/Dust_cleaning_img_component.svg";
import handy_man from "../../images/Handy_man_img_component.svg";
import pluming from "../../images/Pluming_img_component.svg";
import comapny_authority from "../../images/company_authority_img.svg";
import OurClient from "./componenets/ourClient";

import "./style.css";
const HomePage = () => {
  return (
    <>
      <Header />

      <section className="banner_section">
        <div className="page_width">
          <div className="WelcomeBanner">
            <div className="leftBanner">
              <h3>Best in Dubai</h3>
              <h2>Welcome To</h2>

              <h1>
                Home <span>Comfort</span>
              </h1>
              <p>
                Home Comfort provides home repair services in Dubai with
                reasonable rates. We fix it right with home comfort professional
                experts.
              </p>
              <div className="contact_learn_more">
                <a href="/">
                  <button className="contact">Contact Us</button>
                </a>
                <a href="/">
                  {" "}
                  <button className="learn_more"> Learn More</button>
                </a>
              </div>
            </div>
            <div className="rightImageBanner">
              <div className="bannerImg">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="after_welcome_banner_section">
        <div className="page_width">
          <div className="after_banner_section">
            <div className="icons_after_banner_section">
              <div className="img_serice_hour">
                {" "}
                <img src={serviceHours} alt="" />
              </div>
              <h2>24/7 Service</h2>
            </div>
            <div className="icons_after_banner_section">
              <div className="img_serice_hour">
                {" "}
                <img src={price} alt="" />
              </div>
              <h2>Reasonable Rates</h2>
            </div>
            <div className="icons_after_banner_section">
              <div className="img_serice_hour">
                {" "}
                <img src={team} alt="" />
              </div>
              <h2>Experienced Team</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="explore_our_services">
        <div className="page_width">
          <div className="our_services_section">
            <h2>
              Explore our <span>Services</span>
            </h2>
            <div className="component_container">
              <Components img={Ac_service_img} caption="AC Service" />
              <Components img={dusk_cleaning} caption="Dust Cleaning" />
              <Components img={handy_man} caption="Handyman" />
              <Components img={pluming} caption="Plumbing" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="page_width">
          <div className="who_we_are">
            <div className="left_banner">
              <div className="who_we_are_img_container">
                <img src={Img_who_we_are} alt="" />
              </div>
            </div>

            <div className="right_banner">
              <h2>
                Who we <span>Are?</span>
              </h2>
              <p>
                Home Comfort is a leading multiple service provider company
                catering to your 360 needs with quality guaranteed. The aim and
                priority of Home Comfort are to add value to our consumers’
                lives by providing smart solutions to all their problems. Our
                pride is providing the most extensive range of services. From
                home maintenance to personal assistance.
              </p>
              <p>
                We make sure that your safety is never compromised. This is why
                we hire all the staff under the roof of Home Comfort, just for
                your satisfaction. Our goal is to become the largest and most
                famous online home services platform and provide our customers
                with the best of services and experience. Our experts will give
                you the most satisfying experience and professionalism. On your
                demand, all of our best home maintenance and renovation services
                are available at the very right time and place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="company_authority">
          <div className="left_side">
            <h2>
              Company <span>Authority</span>
            </h2>
            <p>
              Basically, finding the right person to do up the works is very
              much important and for that, there are certain things you should
              keep in mind while appointing a service man. Analyze the best
              service provider who can perform the works well and give you
              desired results. You can search for professional home service
              companies online and get the best company that meets up your
              demands.
            </p>
            <p>
              Home Comfort is a leading multiple service provider company
              catering to your 360 needs with quality guaranteed. The aim and
              priority of Home Comfort are to add value to our consumers’ lives
              by providing smart solutions to all their problems. Our pride is
              providing the most extensive range of services. From home
              maintenance to personal assistance.
            </p>
          </div>
          <div className="right_side">
            <div className="img_container">
              <img src={comapny_authority} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="our_client_section">
        <div className="page_width">
          <div className="our_clients">
            <h2>
              Our <span>Clients</span>
            </h2>
            <p>
              We make sure that your safety is never compromised. This is why we
              hire all the staff under the roof of Home Comfort, just for your
              satisfaction. Our goal is to become the largest and most famous
              online home services platform and provide our customers with the
              best of services and experience.
            </p>
            <div className="clients_grid_container">
              <OurClient
                image={team}
                name="Alena Hertzwit"
                time="3 months ago"
                comment="We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction."
              />
              <OurClient
                image={team}
                name="Alena Hertzwit"
                time="3 months ago"
                comment="We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction."
              />
              <OurClient
                image={team}
                name="Alena Hertzwit"
                time="3 months ago"
                comment="We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction."
              />
              <OurClient
                image={team}
                name="Alena Hertzwit"
                time="3 months ago"
                comment="We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction."
              />
              <OurClient
                image={team}
                name="Alena Hertzwit"
                time="3 months ago"
                comment="We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction."
              />
              <OurClient
                image={team}
                name="Alena Hertzwit"
                time="3 months ago"
                comment="We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction."
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
