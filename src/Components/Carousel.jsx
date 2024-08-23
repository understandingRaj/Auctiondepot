import React from 'react'
import './CSS/Carousel.css'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/antiquebanner.jpeg" className="d-block w-100" alt="Not Found" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/phonebanner.jpeg" className="d-block w-100" alt="Not Found" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carbanner1.jpg" className="d-block w-100" alt="Not Found"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/banner4.jpg" className="d-block w-100" alt="Not Found"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/banner8.jpg" className="d-block w-100" alt="Not Found"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel