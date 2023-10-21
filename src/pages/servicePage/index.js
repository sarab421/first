import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/footer";
import "./style.css";
import handy_man from "../../images/Handy_man_img_component.svg";
const ServicePage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="page_width">
          <div className="cleaning_service_first_section">
            <div className="left_side">
              <div className="our_services_service_page">Our Services</div>
              <h1>AC Duck</h1>
              <h1 className="cleaning_service">Cleaning Services</h1>
              <div className="space_between_buttons">
                <button>Book Now</button>
                <button>Contact Us</button>
              </div>
            </div>

            <div className="right_side">
              <div className="image_container">
                <img src={handy_man} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="page_width">
          <div className="fifty_per_off">
            <div className="get_off">Get 50% off</div>
            <div className="enter_data">
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Phone" />
              

              <select name="service" >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <input type="text" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
