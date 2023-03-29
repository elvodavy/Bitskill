import { React } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

//Images
import image1 from '../../../assets/Dream_Background (1) 1.png';
import image2 from '../../../assets/Dream_Background 1.png';
import image3 from '../../../assets/Dream_Background (1) 2.png';
import Logo from '../../../assets/logo.png';
const Footer = () => {
    return(
            <div className='container-fluid footer-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='container-fluid'>
                            <div className='container footer-content-padding'>
                                <div className='row'>
                                    <div className='col-md-10'>
                                        <div  className='row'>
                                            <div className='col-md-3'>
                                                <Link class="navbar-brand" to="/">
                                                    <img src={Logo} alt="Dobiri-Logo" className="img-fluid"/>
                                                    <br/>
                                                </Link>
                                            </div>
                                            <div className='col-md-3'>
                                                <ul className='Help-Links'>
                                                    <br/>
                                                    <h5><b>Useful Links</b></h5>
                                                    <br/>
                                                    <Link className='footer-link'><li>Pricing</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>About us</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>How it works</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Privacy Policy</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Terms and Conditions</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Contact</li></Link>
                                                </ul>
                                            </div>
                                            <div className='col-md-3'>
                                                <ul className='Help-Links'>
                                                    <br/>
                                                    <h5><b>Solutions</b></h5>
                                                    <br/>
                                                    <Link className='footer-link'><li>Students</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Institution</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Company</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Artist</li></Link>
                                                    <br/>
                                                
                                                </ul>
                                            </div>
                                            <div className='col-md-3'>
                                                <ul className='Help-Links'>
                                                    <br/>
                                                    <h5><b>Products</b></h5>
                                                    <br/>
                                                    <Link className='footer-link'><li>Bitskill Acclaim</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Bitskill talent match</li></Link>
                                                    <br/>
                                                    <Link className='footer-link'><li>Bitskill Workforce</li></Link>
                                                    <br/>                                 
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-2'>
                                        <span className=''>© 2023 Bitskill Inc., All Rights Reserved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
    );
}

export default Footer;