import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navBar/navbar';
import './staffLogin.css';
import Axios from "axios";

//Localhost url for the server
const domain = "http://localhost:5000"; 

const StaffLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pswdError, setPswdError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleTextChange = (event) => {
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

     //StaffLogin status
  const [loginStatus, setLoginStatus] = useState("false");

  //checkpath
  const [checkPath, setCheckPath] = useState('/login');

  //StaffLogin user
  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post(domain + "/api/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data == "Wrong email/Password combination!") {
        setCheckPath("/staffLogin");
        alert(response.data);
      } else if (response.data == "User does not exist!") {
        setCheckPath("/staffLogin");
        alert(response.data);
      } else {
        setCheckPath("/institutionalUse");
      }
    });
  };

    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <div className='row'>
                            
                                <div className='d-flex'>
                                <hr/><h3 className='text-center signUp-form-h3'>Staff Login</h3><hr/>
                                </div>
                                <br/>
                                <br/>
                                <h6>Institution Name</h6>
                                <br/>
                                <input type='text' className='input staffLoginInput' onChange={handleTextChange} placeholder='' id='institution-name'/>
                                <br/>
                                <br/>
                                <h6>Email</h6>
                                <input type='email' className='input staffLoginInput' onChange={handleEmailChange} placeholder='' id='institution-name'/>
                                <br/>
                                {error && <p className="error">{error}</p>}
                                <br/>
                                <h6>Password</h6>
                                <input type='password' className='input staffLoginInput' onChange={handlePasswordChange} placeholder='' id='institution-type'/>
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
                                <Link className="termsLink">
                                    <br/>Have your institution admin create one for you
                                </Link>
                                </p>
                           
                        </div>
                       
                    </div>
                </div>               
            </div>
    );
}

export default StaffLogin;