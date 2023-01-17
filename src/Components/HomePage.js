import React from 'react'
import './style.css';


const HomePage = () => {
    return (
        <div className='bg'>
            <div>
                <img src='./Image/Spanidea-Logo.png' style={{ width: "25%" }} />
            </div>
            <div className='text-light clo-md-6' style={{ width: "50%", height: "30px" }}>
                <p style={{ padding: "10%" }}><h2>NEXT GENERATION TECHNOLOGY AND PRODUCT ENGINEERING</h2></p>
                <div style={{ width: "60%", padding: "0 0 20px 130px" }}><p style={{ position: "center" }}>A trusted technology partner delivering customized and innovative solutions and supporting fortune 500/Mid-size/Start-upsacross the Digital transformation value chain tobring their IDEAS to LIFE</p></div>
            </div>

            <div style={{float:"right"}}>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-danger dropdown-toggle bg-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Product Engineering
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Designing And development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                web designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                app designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Engineering
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Software Enginering
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-danger dropdown-toggle bg-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        About Us
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Designing And development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                web designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                app designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Engineering
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Software Enginering
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-danger dropdown-toggle bg-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Digital
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Designing And development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                web designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                app designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Engineering
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Software Enginering
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-danger dropdown-toggle bg-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Tech Consulting
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Designing And development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                web designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                app designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Engineering
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Software Enginering
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-danger dropdown-toggle bg-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Solutions
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Designing And development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                web designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                app designing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Product Engineering
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="#">
                                Software Enginering
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    );
};

export default HomePage;