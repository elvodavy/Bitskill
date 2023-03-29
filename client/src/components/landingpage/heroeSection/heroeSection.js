import { React } from 'react';
import Navbar from '../../navBar/navbar';
import { Link } from 'react-router-dom';

//Images
import image1 from '../../../assets/image1.png';
import './heroeSection.css'

const HeroeSection = () => {
    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container'>
                    <div className='row rowpadding'>
                        <div className='col-md-6 column-padding'>
                            <h1 className='hero-heading'>Blockchain-certified skills and credentials</h1>
                            <br/>
                            <br/>
                            <p className='hero-text'>Bitskill is the definitive system by which universities, businesses, and training providers come together to permanently certify & guarantee skills thanks to blockchain technology.</p>
                            <br/>
                            <br/>
                            <Link to='/bitskillSolutions'>
                                <button className='start-button'>Try Bitskill</button>
                            </Link>
                        </div>
                        <div className='col-md-6'>
                            <img src={image1} className="img-fluid" alt='hero-section-img'/>
                        </div>
                        <div className="solutions-intro">
                            <h2 className="text-center">Bitskill</h2>
                            <p className="text-center">
                                Via Bitskill, anyone may save any kind of qualifications and 
                                accomplishments using Blockchain technology. Get a free trial of the Bitskill platform.
                            </p>
                        </div>
                    </div>
                </div>               
            </div>
    );
}

export default HeroeSection;