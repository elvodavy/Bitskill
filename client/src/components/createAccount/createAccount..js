import { React } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './createAccount.css'

//Images
import Google from '../../assets/google 1.png';
import Microsoft from '../../assets/microsoft 1.png';
import Linkedin from '../../assets/linkedin (1) 1.png';
import Twitter from '../../assets/twitter (2) 1.png';

const CreateAccount = () => {
    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <div className='row'>
                            <div className='col-sm-7'>
                            <div className='d-flex'>
                                <hr/><h3 className='text-center signUp-form-h3'>Sign Up</h3><hr/>
                                </div>
                                <br/>
                                <h6>Email</h6>
                                <input type='email' className='input' placeholder='' id='institution-name'/>
                                <br/>
                                <br/>
                                <h6>Password</h6>
                                <input type='password' className='input' placeholder='' id='institution-type'/>
                                <br/>
                                <br/>
                                <h6>Confirm Password</h6>
                                <input type='password' className='input' placeholder='' id='address'/>
                                <br/>
                                <br/>
                                <p>By creating an account you agree to our 
                                <Link to='/terms&conditions' className='hyper-link'> terms and conditions</Link>
                                </p>                        
                                
                                <br/>
                                <Link to='/institutionalUse'>
                                    <button className='call-to-action'>Create account</button>
                                </Link>
                                <br/>
                            </div>
                            <div className='col-sm-5 d-flex justify-content-center'>
                                <div>
                                    <br/>
                                    <br/>
                                    <h5 className='text-center'>Or</h5>
                                    <h6 className='text-center'>Sign up with</h6>
                                    <br/>
                                    <Link to='/createAccount' className='link-btn'>
                                        <div className='d-flex justify-content-center create-account-option'>
                                            <div className='img-spacing'>
                                                <img src={Google} className='img-fluid'/>
                                            </div>
                                            <span className='word-spacing'>Google</span>
                                        </div> 
                                    </Link>
                                    <br/>
                                    <Link to='/createAccount' className='link-btn'>
                                        <div className='d-flex justify-content-center create-account-option'>
                                            <div className='img-spacing'>
                                                <img src={Microsoft} className='img-fluid'/>
                                            </div>
                                            <span className='word-spacing'>Microsoft</span>
                                        </div> 
                                    </Link>
                                    <br/>
                                    <Link to='/createAccount' className='link-btn'>
                                        <div className='d-flex justify-content-center create-account-option'>
                                            <div className='img-spacing'>
                                                <img src={Linkedin} className='img-fluid'/>
                                            </div>
                                            <span className='word-spacing'>Linkedin</span>
                                        </div> 
                                    </Link>
                                    <br/>
                                    <Link to='/createAccount' className='link-btn'>
                                        <div className='d-flex justify-content-center create-account-option'>
                                            <div className='img-spacing'>
                                                <img src={Twitter} className='img-fluid'/>
                                            </div>
                                            <span className='word-spacing'>Twitter</span>
                                        </div> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>               
            </div>
    );
}

export default CreateAccount;