import { React } from 'react';
import Navbar from '../../navBar/navbar';
import { Link } from 'react-router-dom';

//Images
import image1 from '../../../assets/Dream_Background (1) 1.png';
import image2 from '../../../assets/Dream_Background 1.png';
import image3 from '../../../assets/Dream_Background (1) 2.png';

import './bitskillBrief.css'

const BitskillBrief = () => {
    return(
            <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6' id='column-padding'>
                            <h3 className='brief-heading'><b>Boost Your Professional Reputation with Bitskill</b></h3>
                            <br/>
                            <p className='brief-p'>
                            Bitskill has been developed with the primary objective of 
                            boosting trust and awareness of individuals', Institutions 
                            or companies' capabilities. Whether it's at your professional
                             office or school, we strive to help you showcase your skills 
                             and abilities to the fullest. In today's competitive business 
                             landscape, having a platform that can help you stand out from 
                             the crowd is crucial, and that's where Bitskill comes in.
                            </p>
                        </div>
                        <div className='col-md-6 img1'>
                            <br/>
                            <br/>
                        </div>
                    </div>  
                    <div className='row'>        
                        <div className='col-md-6 img2'>
                            <br/>
                            <br/>
                        </div>
                        <div className='col-md-6' id='column-padding'>
                            <h3 className='brief-heading'><b>How Blockchain Technology Enhances Bitskill</b></h3>
                            <br/>
                            <p className='brief-p'>
                            At Bitskill, we leverage cutting-edge blockchain technology to 
                            provide a secure and transparent platform that allows you to 
                            showcase your skills and connect with potential clients or 
                            employers. Our platform is designed to help you generate leads
                             and up-sell your services to a wider audience.
                            </p>
                        </div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6' id='column-padding'>
                            <h3 className='brief-heading'><b>Establish Your Brand Presence with Bitskill</b></h3>
                            <br/>
                            <p className='brief-p'>
                            Bitskill is a comprehensive platform that can help you
                             increase trust and awareness of your capabilities, 
                             generate leads, up-sell your services, and establish
                              a strong brand presence. Whether you're an individual
                               looking to showcase your skills or a business looking 
                               to expand your reach, we're here to help you achieve your goals.
                            </p>
                        </div>
                        <div className='col-md-6 img3'>
                            <br/>
                            <br/>
                        </div>
                    </div>            
            </div>
    );
}

export default BitskillBrief;