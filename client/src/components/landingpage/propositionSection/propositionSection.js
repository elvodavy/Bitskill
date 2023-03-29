import { React } from 'react';
import { Link } from 'react-router-dom';
import './propositionSection.css';

//Images
import image1 from '../../../assets/Dream_Background (1) 1.png';
import image2 from '../../../assets/Dream_Background 1.png';
import image3 from '../../../assets/Dream_Background (1) 2.png';
import propositionImg from '../../../assets/propositionCard.png';

const Proposition = () => {
    return(
            <div className='container-fluid proposition-container'>
                <div className='container'>
                    <div className='row proposition-row'>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-center'>
                                <img src={propositionImg} className='img-fluid proposition-img'/>
                            </div>
                        </div>
                        <div className='col-md-6 propositionText'>
                            <h4 className='proposition-heading'><b>Elevate Your Talent Management Strategy with a Skills-Based Approach</b></h4>
                            <br/>
                            <p className='proposition-p'>
                            Are you ready to take your talent management strategy to the next level?
                             In today's fast-paced business environment, it's crucial for organizations
                              to identify, develop, and hire for the skills required to achieve success
                               both now and in the future. That's why reimagining talent management as
                                a skills-based approach can be a game-changer for your organization.
                            </p>
                        </div>
                    </div>
                </div>     
            </div>
    );
}

export default Proposition;