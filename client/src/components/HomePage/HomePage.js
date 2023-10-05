import React from 'react'
import "./style.css"
import Carousel from 'react-bootstrap/Carousel';
import i14 from "../../assets/images/i14.png"
import iPhone14 from "../../assets/images/iPhone-14.png"
import iPhone142 from "../../assets/images/iPhone-14-2.png"
import manette from "../../assets/images/manette.png"

const HomePage = () => {
    return (
        <div className='all-of-all'>
            <div className='wrap1'>
                <div className='cateogry'>
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
                <Carousel style={{ backgroundColor: "black", width: "100%", height: "100%" }} data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            src={i14}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={iPhone14}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={iPhone142}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>


            </div>
            <div className='wrap2'>
                <div className='flash-sales-today-timer'>
                    <div className='flash-sales'>
                        <div className='d-flex gap-3 align-items-center colors-red'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                                <rect width="20" height="40" rx="4" fill="#DB4444" />
                            </svg>
                            <span>Today 's</span>
                        </div>
                        <span className='flash-text'>Flash Sales</span>
                    </div>
                    <div className='timer'>
                        <div className='timer-child'>
                            <span>Days</span>
                            <span>03</span>
                        </div>
                        <div className='d-flex flex-column gap-1  p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#E07575" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#E07575" />
                            </svg>

                        </div>
                        <div className='timer-child'>
                            <span>Hours</span>
                            <span>23</span>
                        </div>
                        <div className='d-flex flex-column gap-1  p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#E07575" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#E07575" />
                            </svg>

                        </div>
                        <div className='timer-child'>
                            <span>Minutes</span>
                            <span>19</span>
                        </div>
                        <div className='d-flex flex-column gap-1  p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#E07575" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#E07575" />
                            </svg>

                        </div>
                        <div className='timer-child'>
                            <span>Seconds</span>
                            <span>56</span>
                        </div>
                    </div>
                </div>
                <div className='cards d-flex gap-4'>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-images'>
                            <div className='promtion-div-wish'>
                                <button>-40%</button>
                                <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                            </div>
                            <i class="fa-regular fa-eye fa-lg" style={{ color: "black" }}></i>

                            <img src={manette} />
                        </div>
                        <div className='card-infos d-flex flex-column gap-2'>
                            <span>HAVIT HV-G92 Gamepad</span>
                            <div className='d-flex gap-3 money'>
                                <span style={{ color: "#DB4444" }} >$120</span>
                                <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                                    (88)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center viewallbtn'>
                    <button>View All Products</button>
                </div>
                <hr style={{
                    height: "0rem",
                    opacity: "0.3",
                    background: "#000"
                }} />
            </div>
            <div className='wrap3 d-flex flex-column gap-5  '>
                <div className='flash-sales'>
                    <div className='d-flex gap-3 align-items-center colors-red'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                            <rect width="20" height="40" rx="4" fill="#DB4444" />
                        </svg>
                        <span>Categories</span>
                    </div>
                    <span className='flash-text'>Browse By cateogry</span>
                </div>
                <div className='d-flex gap-5 align-items-center mb-5'>
                    <div className='category-div-sub'>
                        <div className='d-flex gap-3 align-items-center flex-column'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <g clip-path="url(#clip0_2954_1169)">
                                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2954_1169">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Phones
                        </div>
                    </div>
                    <div className='category-div-sub'>
                        <div className='d-flex gap-3 align-items-center flex-column'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <g clip-path="url(#clip0_2954_1169)">
                                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2954_1169">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Phones
                        </div>
                    </div>
                    <div className='category-div-sub'>
                        <div className='d-flex gap-3 align-items-center flex-column'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <g clip-path="url(#clip0_2954_1169)">
                                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2954_1169">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Phones
                        </div>
                    </div>
                    <div className='category-div-sub'>
                        <div className='d-flex gap-3 align-items-center flex-column'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <g clip-path="url(#clip0_2954_1169)">
                                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2954_1169">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Phones
                        </div>
                    </div>
                    <div className='category-div-sub'>
                        <div className='d-flex gap-3 align-items-center flex-column'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <g clip-path="url(#clip0_2954_1169)">
                                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2954_1169">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Phones
                        </div>
                    </div>
                    <div className='category-div-sub'>
                        <div className='d-flex gap-3 align-items-center flex-column'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <g clip-path="url(#clip0_2954_1169)">
                                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2954_1169">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Phones
                        </div>
                    </div>

                </div>
                <hr style={{
                    height: "0rem",
                    opacity: "0.3",
                    background: "#000"
                }} />
            </div>
            <div className='wrap2'>
                <div className='flash-sales'>
                    <div className='d-flex gap-3 align-items-center colors-red'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                            <rect width="20" height="40" rx="4" fill="#DB4444" />
                        </svg>
                        <span>This Month</span>
                    </div>
                    <span className='flash-text'>Best Selling Products</span>
                </div>
            </div>
        </div>
    )
}

export default HomePage
