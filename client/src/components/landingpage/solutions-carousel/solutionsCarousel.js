import React from "react";
import { Link } from 'react-router-dom';
import './solutionsCarousel.css';
import Carousel from 'react-bootstrap/Carousel';

//Images
import LearningInstitution from '../../../assets/david-vives-maBCwyRJJRo-unsplash 1.png';
import Students from '../../../assets/good-faces-DSj40n6beGk-unsplash 1.png';
import Companies from '../../../assets/istockphoto-1413884806-1024x1024-transformed 1.png';
import Artists from '../../../assets/marty-o-neill-Jo-ypJVt8gQ-unsplash 1.png';

const SolutionsCarousel = () =>{
    
    return(
        <div className="container-fluid c-container">
            <div className="carousel-container" >
                <Carousel>
                    <Carousel.Item interval={2000} id="carousel-img-container">
                        <img
                        className="d-block w-100 carousel-img img-fluid"
                        src={LearningInstitution}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <div className="content">
                                    <h6 className='h6'>For Learning Institutions</h6>
                                    <br/>
                                    <h3 className='h3'><b>Digital certificates utilizing Blockchain technology that has been
                                        optimized for scalability and efficiency.</b></h3>
                                    <Link to='/bitSkillSolutions'>
                                        <button className='learn-more'>Learn more</button>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} id="carousel-img-container2">
                        <img
                        className="d-block w-100 carousel-img img-fluid"
                        src={Students}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <div className="content">
                                    <h6 className='h6'>For Learners</h6>
                                    <br/>
                                    <h3 className='h3'><b>Use Digital Credentials to Transform your Results Into Opportunity.</b></h3>
                                    <Link to='/bitSkillSolutions'>
                                        <button className='learn-more'>Learn more</button>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} id="carousel-img-container3">
                        <img
                        className="d-block w-100 carousel-img img-fluid"
                        src={Companies}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <div className="content">
                                    <h6 className='h6'>For Employers</h6>
                                    <br/>
                                    <h3 className='h3'><b>Empower your team by Fostering a positive work environment.</b></h3>
                                    <Link to='/bitSkillSolutions'>
                                        <button className='learn-more'>Learn more</button>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} id="carousel-img-container3">
                        <img
                        className="d-block w-100 carousel-img img-fluid"
                        src={Artists}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <div className="content">
                                    <h6 className='h6'>For Artists</h6>
                                    <br/>
                                    <h3 className='h3'><b>Greater control, security, 
                                        and transparency over your work, as well as 
                                        new opportunities.</b></h3>
                                    <Link to='/bitSkillSolutions'>
                                        <button className='learn-more'>Learn more</button>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default SolutionsCarousel;