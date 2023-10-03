import React from "react";
import { FullServices } from "./FullServices";
import { HeaderWrapper } from "./HeaderWrapper";
import { IconCustomerService } from "./IconCustomerService";
import { IconInstagram } from "./IconInstagram";
import { IconLinkedin } from "./IconLinkedin";
import { IconMoneybag } from "./IconMoneybag";
import { IconSale } from "./IconSale";
import { IconShop } from "./IconShop";
import { IconShoppingBag } from "./IconShoppingBag";
import { IconTwitter } from "./IconTwitter";
import { Roadmap } from "./subcomps/Roadmap";
import { ServicesCustomer } from "./ServicesCustomer";
import { ServicesFast } from "./ServicesFast";
import { ServicesMoneyBack } from "./ServicesMoneyBack";
import { TopHeader } from "./subcomps/TopHeader";
import "./style.css";

export const About = () => {
  return (
    <div className="about">
      <div className="div-2">
        <TopHeader className="top-header-instance" />
        <HeaderWrapper
          className="header-2"
          headerHeader="home"
          headerHeader1="header-about-hover"
          headerHeaderHeaderHomeClassName="header-3"
          headerUnderLineUnderLineClassName="header-4"
          withBuyCart="off"
          withBuyCartOnClassName="header-5"
        />
        <div className="line-wrapper">
          <img className="img" alt="Line" src="line-3.svg" />
        </div>
        <Roadmap
          className="roadmap-instance"
          hasDiv={false}
          hasDiv1={false}
          hasImg={false}
          hasLine={false}
          hasLine1={false}
          line="line-13-2.svg"
          text="Home"
          text1="About"
          visible={false}
        />
        <div className="frame-12">
          <div className="text-wrapper-7">Our Story</div>
          <div className="frame-13">
            <p className="text-wrapper-8">
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in
              Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has
              10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p className="exclusive-has-more">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse
              assotment in categories ranging&nbsp;&nbsp;from consumer.
            </p>
          </div>
        </div>
        <div className="side-image">
          <img
            className="portrait-two-african"
            alt="Portrait two african"
            src="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone-1.png"
          />
        </div>
        <FullServices
          className="full-services-instance"
          servicesCustomerIcon={<IconCustomerService className="icon-instance-node-3" color="white" />}
          servicesCustomerServicesServicesDeliveryClassName="full-services-3"
          servicesFastServicesServicesDeliveryClassName="full-services-2"
          servicesMoneyBackServicesServicesDeliveryClassName="full-services-4"
          visible={false}
        />
        <div className="frame-14">
          <div className="frame-wrapper">
            <ServicesFast
              className="services-fast-delivery"
              divClassName="frame-16"
              divClassNameOverride="frame-17"
              frameClassName="frame-15"
              icon={<IconShop className="icon-instance-node-3" />}
              servicesServicesDeliveryClassName="services-fast-instance"
              text="10.5k"
              text1="Sallers active our site"
            />
          </div>
          <div className="services-money-back-wrapper">
            <ServicesMoneyBack
              className="frame-21"
              divClassName="frame-19"
              divClassNameOverride="frame-20"
              icon={<IconSale className="icon-instance-node-3" />}
              servicesOverlapGroupClassName="frame-18"
              servicesServicesDeliveryClassName="frame-22"
              text="33k"
              text1="Mopnthly Produduct Sale"
            />
          </div>
          <div className="frame-wrapper">
            <ServicesCustomer
              className="services-customer-service"
              divClassName="frame-16"
              divClassNameOverride="frame-17"
              frameClassName="frame-15"
              icon={<IconShoppingBag className="icon-instance-node-3" color="white" />}
              servicesServicesDeliveryClassName="services-customer-instance"
              text="45.5k"
              text1="Customer active in our site"
            />
          </div>
          <div className="frame-wrapper">
            <ServicesMoneyBack
              className="frame-23"
              divClassName="frame-16"
              divClassNameOverride="frame-17"
              frameClassName="frame-15"
              icon={<IconMoneybag className="icon-instance-node-3" />}
              servicesServicesDeliveryClassName="frame-24"
              text="25k"
              text1="Anual gross sale in our site"
            />
          </div>
        </div>
        <div className="frame-25">
          <div className="frame-26">
            <div className="image-wrapper">
              <img className="image" alt="Image" src="image-46.png" />
            </div>
            <div className="frame-27">
              <div className="frame-28">
                <div className="text-wrapper-9">Tom Cruise</div>
                <div className="text-wrapper-10">Founder &amp; Chairman</div>
              </div>
              <div className="frame-29">
                <IconTwitter className="icon-instance-node-4" color="black" stroke="white" />
                <IconInstagram className="icon-instance-node-4" color="black" />
                <IconLinkedin className="icon-instance-node-4" color="black" />
              </div>
            </div>
          </div>
          <div className="frame-26">
            <div className="image-wrapper">
              <img className="image-2" alt="Image" src="image-51.png" />
            </div>
            <div className="frame-27">
              <div className="frame-28">
                <div className="text-wrapper-9">Emma Watson</div>
                <div className="text-wrapper-10">Managing Director</div>
              </div>
              <div className="frame-29">
                <IconTwitter className="icon-instance-node-4" color="black" stroke="white" />
                <IconInstagram className="icon-instance-node-4" color="black" />
                <IconLinkedin className="icon-instance-node-4" color="black" />
              </div>
            </div>
          </div>
          <div className="frame-26">
            <div className="image-wrapper">
              <img className="image-3" alt="Image" src="image-47.png" />
            </div>
            <div className="frame-27">
              <div className="frame-28">
                <div className="text-wrapper-9">Will Smith</div>
                <div className="text-wrapper-10">Product Designer</div>
              </div>
              <div className="frame-29">
                <IconTwitter className="icon-instance-node-4" color="black" stroke="white" />
                <IconInstagram className="icon-instance-node-4" color="black" />
                <IconLinkedin className="icon-instance-node-4" color="black" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-30">
          <div className="ellipse-3" />
          <div className="ellipse-3" />
          <div className="group-2">
            <div className="overlap-group-6">
              <div className="ellipse-4" />
              <div className="ellipse-5" />
            </div>
          </div>
          <div className="ellipse-3" />
          <div className="ellipse-3" />
        </div>
      </div>
    </div>
  );
};
export default About
