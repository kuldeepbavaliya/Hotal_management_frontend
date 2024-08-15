import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderImage() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="p1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(59, 51,51 , .70)', height: '70%', width: '70%' }}>
                            <h6 style={{ marginTop: '200px', color: '#ffA500' }}>
                                ____LUXURY LIVING____
                            </h6>
                            <h1>Discover A Brand <br />
                                Luxurious Hotel<br />
                                <Link to='/Booking' type="button" className="btn btn-light mx-3" style={{ backgroundColor: '#ffA500' }}>OUR ROOM</Link>
                                <Link to='/Rooms' type="button" className="btn btn-light">BOOK ROOM</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="p2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(59, 51,51 , .70)', height: '70%', width: '70%' }}>
                            <h6 style={{ marginTop: '200px', color: '#ffA500' }}>
                                ____LUXURY LIVING____
                            </h6>
                            <h1>Discover A Brand <br />
                                Luxurious Hotel<br />
                                <Link to='/Booking' type="button" className="btn btn-light mx-3" style={{ backgroundColor: '#ffA500' }}>OUR ROOM</Link>
                                <Link to='/Rooms' type="button" className="btn btn-light">BOOK ROOM</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="p3.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(59, 51,51 , .70)', height: '70%', width: '70%' }}>
                            <h6 style={{ marginTop: '200px', color: '#ffA500' }}>
                                ____LUXURY LIVING____
                            </h6>
                            <h1>Discover A Brand <br />
                                Luxurious Hotel<br />
                                <Link to='/Booking' type="button" className="btn btn-light mx-3" style={{ backgroundColor: '#ffA500' }}>OUR ROOM</Link>
                                <Link to='/Rooms' type="button" className="btn btn-light">BOOK ROOM</Link>
                            </h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
