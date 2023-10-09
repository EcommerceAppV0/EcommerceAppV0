import "./style.css";
import image from "../../assets/images/2girls.png";
import container1 from "../../assets/images/Frame 701.png";
import services from "../../assets/images/services-icon.png";
import dollar from "../../assets/images/Icon-Sale.png";
import darkCircle from "../../assets/images/dark-circle.png";
import shopping from "../../assets/images/Icon-Shopping bag.png";
import money from "../../assets/images/money.png";
import emp1 from "../../assets/images/image 46.png";
import emp2 from "../../assets/images/image 47.png";
import emp3 from "../../assets/images/image 51.png";
import twitter from "../../assets/images/Icon-Twitter.png";
import insta from "../../assets/images/icon-instagram.png"
import linkdin from "../../assets/images/Icon-Linkedin.png";
import lastFrame from "../../assets/images/Full services.png";
import slider from "../../assets/images/Frame 883.png"

const About = () => {
  return (
    <div className="about">
      <div className="about-top-navigation">
        <a>Home</a> /<a> About</a>
      </div>
      <div className="about-second-div">
        <div className="our-story">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={image} alt="2girls" />
      </div>
      <div className="about-third-div">
        <div className="icons-cards">
          <img src={container1} alt="frame" />
        </div>
        <div className="icons-cards" style={{ backgroundColor: "#DB4444" }}>
          <img src={services} alt="" />
          <img src={dollar} className="circle-icons" alt="" />
          <p></p>
        </div>
        <div className="icons-cards">
          <img src={darkCircle} alt="" />
          <img src={shopping} className="circle-icons" alt="" />
          <p></p>
        </div>
        <div className="icons-cards">
          <img src={darkCircle} alt="" />
          <img src={money} className="circle-icons" alt="" />
          <p></p>
        </div>
      </div>
      <div className="about-fourth-div">
        <div className="employee-card">
          <div className="image-card">
            <img src={emp1} alt="" />
          </div>
          <div className="description">
            <h1>Tom Cruise</h1>
            <h6>Founder & Chairman</h6>
            <div className="social-icons">
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={linkdin} alt="" />
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="image-card">
            <img src={emp3} alt="" />
          </div>
          <div className="description">
            <h1>Emma Wattson</h1>
            <h6>Managing Director</h6>
            <div className="social-icons">
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={linkdin} alt="" />
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="image-card">
            <img src={emp2} alt="" />
          </div>
          <div className="description">
            <h1>Will Smith</h1>
            <h6>Product Designer</h6>
            <div className="social-icons">
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={linkdin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <img src={slider} alt="" />
      </div>
      <div className="last-div">
        <img src={lastFrame} alt="" />
      </div>
    </div>
  );
};

export default About;
