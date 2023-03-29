import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './personalAccountSignUp.css'
import Axios from "axios";

//Images
import Google from '../../../assets/google 1.png';
import Microsoft from '../../../assets/microsoft 1.png';
import Linkedin from '../../../assets/linkedin (1) 1.png';
import Twitter from '../../../assets/twitter (2) 1.png';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

//Localhost url for the server
const domain = "http://localhost:5000"; 

const PersonalAccountSignUP = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [pswdError, setPswdError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const validateForm = () => {
        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return false;
        } else if (password.length < 8) {
            setPswdError('Password must be at least 8 characters long');
            return false;
        } else if (password !== confirmPassword) {
            setPswdError('Passwords do not match');
            return false;
        }
        setError('');
        return true;
    }

    const handleSubmit = (event) => {
        if (validateForm()) {
            // handle form submission
            addUser();
        }
        else{
            event.preventDefault();
        }
    }

      //Add user
  const addUser = () => {

    Axios.post(domain + "/api/register", {
      email: email,
      password: password,
    }).then((response) => {
      if (
        response.data ==
        "A username with that email already exists! Try logging in"
      ) {
        window.location.href = "/createAccount";
        alert(response.data);
      } else {
        console.log(response);
        
      }
    });
  };
    
    return(
            <div className='container-fluid'>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <div className='row'>
                            <div className='col-sm-7'>
                            <div className='d-flex'>
                                <hr/><h3 className='text-center signUp-form-h3'>Sign Up</h3><hr/>
                                </div>
                                <br/>
                                <h6>Email</h6>
                                <input type='email' className='input' onChange={handleEmailChange} placeholder='' id='institution-name'/>
                                <br/>
                                {error && <p className="error">{error}</p>}
                                <br/>
                                <h6>Password</h6>
                                <input type='password' className='input' onChange={handlePasswordChange} placeholder='' id='institution-type'/>
                                <br/>
                                {pswdError && <p className="error">{pswdError}</p>}
                                <br/>
                                <h6>Confirm Password</h6>
                                <input type='password' className='input' onChange={handleConfirmPasswordChange} placeholder='' id='address'/>
                                <br/>
                                {pswdError && <p className="error">{pswdError}</p>}
                                <br/>
                                <p>By creating an account you agree to our 
                                <Link to='/terms&conditions' className='hyper-link'> terms and conditions</Link>
                                </p>                        
                                
                                <br/>
                                <Link to='/institutionLogin' onClick={handleSubmit}>
                                    <button className='call-to-action'>Create account</button>
                                </Link>
                                <br/>
                                <br/>
                                <p>
                                Already have an account?{" "}
                                <Link to="/institutionLogin" className="termsLink">
                                    Login
                                </Link>
                                </p>
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

export default PersonalAccountSignUP;