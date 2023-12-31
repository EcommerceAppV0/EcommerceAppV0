import React, { useState } from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import i14 from "../../assets/images/i14.png";
import iPhone14 from "../../assets/images/iPhone-14.png";
import iPhone142 from "../../assets/images/iPhone-14-2.png";
import Jbl from "../../assets/images/JBL.png";
import ps5 from "../../assets/images/ps5-slim.png";
import attractiveWoman from "../../assets/images/attractive-woman.png";
import smalJbl from "../../assets/images/smalJbl.png";
import gucci from "../../assets/images/gucci.png";
import upArrow from "../../assets/images/up-arrow.png";
import CardContainer from "../CardConatiner/CardContainer";
import { useSelector } from "react-redux";
import CategoryDiv from "../CategoryDiv/CategoryDiv";
const HomePage = () => {
  const { products, categories } = useSelector((state) => state.prod);
  const [limit, setLimit] = useState(8)

  return (
    <>
      <div className="all-of-all">
        <div className="firstView wrap1">
          <div className="cateogry">
            <span>Women' s fashion</span>
            <span>Men 's fashion </span>
            <span>Electronics</span>
            <span>Home & LifeStyle</span>
            <span>Medicine</span>
            <span>Sports & Outdour</span>
            <span>Baby's & Toys</span>
            <span>Groceries & Pets</span>
            <span>Health & Beauty</span>
          </div>
          <Carousel
            style={{ backgroundColor: "black", width: "100%", height: "100%" }}
            data-bs-theme="dark"
          >
            <Carousel.Item>
              <img src={i14} alt="First" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={iPhone14} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={iPhone142} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="flashSales wrap2">
          <div className="flash-sales-today-timer">
            <div className="flash-sales">
              <div className="d-flex gap-3 align-items-center colors-red">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="40"
                  viewBox="0 0 20 40"
                  fill="none"
                >
                  <rect width="20" height="40" rx="4" fill="#DB4444" />
                </svg>
                <span>Today 's</span>
              </div>
              <span className="flash-text">Flash Sales</span>
            </div>
            <div className="timer">
              <div className="timer-child">
                <span>Days</span>
                <span>03</span>
              </div>
              <div className="d-flex flex-column gap-1  p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#E07575" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#E07575" />
                </svg>
              </div>
              <div className="timer-child">
                <span>Hours</span>
                <span>23</span>
              </div>
              <div className="d-flex flex-column gap-1  p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#E07575" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#E07575" />
                </svg>
              </div>
              <div className="timer-child">
                <span>Minutes</span>
                <span>19</span>
              </div>
              <div className="d-flex flex-column gap-1  p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#E07575" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#E07575" />
                </svg>
              </div>
              <div className="timer-child">
                <span>Seconds</span>
                <span>56</span>
              </div>
            </div>
          </div>
          <div className="cards d-flex gap-4">
            {products
              .filter((prod) => prod.status === "sale")
              .map((prod) => (
                <CardContainer key={prod.id} prod={prod} />
              ))}
          </div>
          {/* Rabi Ysahel  */}
          {/* <div className="viewallbtn d-flex align-items-center justify-content-center">
            <button>View All Products</button>
          </div> */}
          <hr
            style={{
              height: "0rem",
              opacity: "0.3",
              background: "#000",
            }}
          />
        </div>
        <div className="browseByCategory wrap3 d-flex flex-column gap-5  ">
          <div className="flash-sales">
            <div className="d-flex gap-3 align-items-center colors-red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="40"
                viewBox="0 0 20 40"
                fill="none"
              >
                <rect width="20" height="40" rx="4" fill="#DB4444" />
              </svg>
              <span>Categories</span>
            </div>
            <span className="flash-text">Browse By cateogry</span>
          </div>
          <div
            className="d-flex gap-5 align-items-center mb-5"
            style={{ overflowY: "hidden", height: "17rem" }}
          >
            {categories.map((category) => (
              <CategoryDiv key={category.id} category={category} />
            ))}
          </div>
          <hr
            style={{
              height: "0rem",
              opacity: "0.3",
              background: "#000",
            }}
          />
        </div>
        <div className='bestSelling Prod wrap2 mb-5'>
          <div className='flash-sales'>
            <div className='d-flex gap-3 align-items-center colors-red'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                <rect width="20" height="40" rx="4" fill="#DB4444" />
              </svg>
              <span>This Month</span>
            </div>
            <span className='flash-text'>Best Selling Products</span>
          </div>
          <div className='d-flex gap-4'>
            {
              products.map((prod, i) => {
                if (i < 12 && i > 7) {
                  return <CardContainer key={prod.id} prod={prod} />
                } else {
                  return null
                }
              })
            }
          </div>
        </div>
        <div className='baffle-images here mb-5 d-flex align-items-center p-4' style={{ height: "30rem", backgroundColor: "black" }}>
          <div className='d-flex flex-column gap-5 p-4' style={{ flex: 1 }}>
            <span className='green-Cteggories'>Categories</span>
            <span className='enahce-music'>Enhance Your Music Experience</span>

            <div className='d-flex gap-4'>
              <div className='oneCircle'>
                <div className='circle-text'>
                  <span >23</span>
                  <span style={{ fontWeight: "400" }}>Hours</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <circle cx="31" cy="31" r="31" fill="white" />
                </svg>
              </div>
              <div className='oneCircle'>
                <div className='circle-text'>
                  <span >23</span>
                  <span style={{ fontWeight: "400" }}>Hours</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <circle cx="31" cy="31" r="31" fill="white" />
                </svg>
              </div>
              <div className='oneCircle'>
                <div className='circle-text'>
                  <span >23</span>
                  <span style={{ fontWeight: "400" }}>Hours</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <circle cx="31" cy="31" r="31" fill="white" />
                </svg>
              </div>
              <div className='oneCircle'>
                <div className='circle-text'>
                  <span >5</span>
                  <span style={{ fontWeight: "400" }}>Days</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <circle cx="31" cy="31" r="31" fill="white" />
                </svg>
              </div>

            </div>
            <div>
              <button className='byNow'>Buy Now!</button>
            </div>

          </div>
          <div className='d-flex align-items-center ' style={{ flex: 1, height: "100%", width: "100%" }}>
            <img className='baffle-img' alt="baffle" style={{ width: "100%", height: "80%", objectFit: "conatin" }} src={Jbl} />
          </div>

        </div>

        <div className='exploreOurProd wrap2'>
          <div className='flash-sales'>
            <div className='d-flex gap-3 align-items-center colors-red'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                <rect width="20" height="40" rx="4" fill="#DB4444" />
              </svg>
              <span>Our Products</span>
            </div>
            <span className='flash-text'>Explore Our Products</span>
          </div>
          <div className='ourProducts d-grid'>
            {
              products.map((prod, index) => {
                if (index < limit) {
                  return <CardContainer key={prod.id} prod={prod} />
                } else {
                  return null
                }

              })
            }
          </div>
          <div className='viewallbtn d-flex align-items-center justify-content-center'>
            {/* we will come back later  */}
            <button
              onClick={() => { limit === 8 ? setLimit(products.length) : setLimit(8) }}
            >{limit === 8 ? "View All Products" : "Show Less"}</button>
          </div>
        </div>

        <div className='newAriivalPage wrap2'>
          <div className='flash-sales'>
            <div className='d-flex gap-3 align-items-center colors-red'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                <rect width="20" height="40" rx="4" fill="#DB4444" />
              </svg>
              <span>Featured</span>
            </div>
            <span className='flash-text'>New Arrival</span>
          </div>
          <div className='newarrival-Container'>
            <div className='d-flex' style={{ flex: "1", background: "black", width: "100%", height: "100%" }}>
              <img style={{ width: "100%", height: "100%" }} src={ps5} alt="play5" />
            </div>
            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ flex: "1", width: "100%", height: "100%" }} >
                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="play5" src={attractiveWoman} />
              </div>
              <div style={{ flex: "1", display: "flex", gap: "2rem" }}>

                <div style={{ flex: "1", width: "100%", backgroundColor: "black", height: "100%", display: "flex", justifyContent: "center" }}>
                  <img style={{ objectFit: "cover" }} src={smalJbl} alt="kbl" />
                </div>
                <div style={{ flex: "1", backgroundColor: "black", width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
                  <img alt="guuci" style={{ objectFit: "cover" }} src={gucci} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center g-3 justify-content-end">
        </div>
      </div >
      <div className="d-flex align-items-center justify-content-center arrow-up-comp" style={{
        width: "4rem",
        borderRadius: "50%",
        height: "4rem",
        background: "#F5F5F5"
      }} onClick={() => window.scrollTo(0, 0)}>
        <img style={{ width: "80%", height: "80%", objectFit: "cover" }} src={upArrow} alt="arrow" />
      </div>
    </ >
  );
};

export default HomePage;
