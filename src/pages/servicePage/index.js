import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/footer";
import "./style.css";
import handy_man from "../../images/Handy_man_img_component.svg";
import cleaning from "../../images/cleaning-service-page.jpg"

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
            <div className="enter_data_grid">
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Phone" />
              <input type="text" placeholder="Select Service" />
              <input
                type="text"
                className="review_input"
                placeholder="Message"
              />
            </div>
            <button>Send</button>
          </div>
        </div>
      </section>

      <section>
        <div className="page_width">
          <div className="provided_solutions">
            <div className="top_section_of_provided_solutions">
              <div className="left_side_of_top_section">
                <h2>
                  Provided <span>Solutions</span>
                </h2>
                <p>
                  Dubai has a lovely environment that attracts people to visit
                  or stay in Dubai. But this lovely environment becomes
                  scorching hot with an AC breakdown. To keep your AC from
                  breaking down, the best way is regular AC maintenance. To keep
                  your cool and fresh all year round, it is best to employ
                  proper AC Services in dubai.
                </p>
                <p>
                  Our Home Comfort team are master technicians who have
                  experience in providing a multitude of AC services, including
                  AC installation, AC repair, AC maintenance, and many other AC
                  services dubai. They can not only easily find the faults but
                  also repair them without affecting the quality of AC services.
                  Don’t Forget to CONTACT US when your AC requires servicing,
                  you can also call on us for regular AC maintenance. We
                  guarantee the quality of our service.
                </p>
              </div>
              <div className="right_side_of_top_section">
                <div className="image_container_of_provided_solutions">
                      <img src={cleaning} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
