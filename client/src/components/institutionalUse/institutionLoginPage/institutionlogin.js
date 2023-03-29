import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navBar/navbar';
import './institutionLogin.css';
import Axios from "axios";

//Images
import Google from '../../../assets/google 1.png';
import Microsoft from '../../../assets/microsoft 1.png';
import Linkedin from '../../../assets/linkedin (1) 1.png';
import Twitter from '../../../assets/twitter (2) 1.png';

//Localhost url for the server
const domain = "http://localhost:5000"; 

const InstitutionLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pswdError, setPswdError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const validateForm = () => {
        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return false;
        } else if (password.length < 8) {
            setPswdError('Password must be at least 8 characters long');
            return false;
        
        }
        setError('');
        return true;
    }

    const handleSubmit = (event) => {
        if (validateForm()) {
            // handle form submission
            login();
        }
        else{
            event.preventDefault();
        }
    }

     //Login status
  const [loginStatus, setLoginStatus] = useState("false");

  //checkpath
  const [checkPath, setCheckPath] = useState('/institutionLogin');

  //Login user
  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post(domain + "/api/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data == "Wrong email/Password combination!") {
        setCheckPath("/institutionLogin");
        alert(response.data);
      } else if (response.data == "User does not exist!") {
        setCheckPath("/institutionLogin");
        alert(response.data);
      } else {
        console.log(response.data);
        window.location.href="/institutionalUse";
      }
    });
  };

    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <div className='row'>
                            <div className='col-md-7'>
                            <div className='d-flex'>
                                <hr/><h3 className='text-center signUp-form-h3'>Login</h3><hr/>
                                </div>
                                <br/>
                                <h6>Institution Email</h6>
                                <input type='email' className='input' onChange={handleEmailChange} placeholder='' id='institution-name'/>
                                <br/>
                                {error && <p className="error">{error}</p>}
                                <br/>
                                <h6>Password</h6>
                                <input type='password' className='input' onChange={handlePasswordChange} placeholder='' id='institution-type'/>
                                <br/>
                                {pswdError && <p className="error">{pswdError}</p>}
                                <br/>       
                                <Link to={checkPath} onClick={handleSubmit}>
                                    <button className='call-to-action'>Login</button>
                                </Link>
                                <br/>
                                <br/>
                                <p>
                                Don't have an account?{" "}
                                <Link to="/createAccount" className="termsLink">
                                    <br/>create account
                                </Link>
                                </p>
                            </div>
                            <div className='col-md-5 d-flex justify-content-center'>
                                <div>
                                    
                                    <h5 className='text-center'>Or</h5>
                                    <h6 className='text-center'>Login with</h6>
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

export default InstitutionLogin;