import { React } from 'react';
import Navbar from '../../navbar/navbar';
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
                            <button className='call-to-action'>Try Bitskill</button>
                        </div>
                        <div className='col-md-6'>
                        
                        <a class="image-1" href="#"><img src={image1} className="img-fluid"/></a>
                    
                            
                        </div>
                    </div>
                </div>               
            </div>
    );
}

export default HeroeSection;