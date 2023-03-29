import { React } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navBar/navbar';
import './signInCheck.css';

const SignInCheck = () => {
    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h3 className='text-center'><b>Sign In to:</b></h3>
                        <br/> 
                        <br/>
                        <Link to='/personalUse'>
                            <button className='call-to-action'>Personal account</button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to='/institutionLogin'>
                            <button className='call-to-action'>Institution Administrator account</button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to='/staffLogin'>
                            <button className='call-to-action'>Institution Staff account</button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to='/companyLogin'>
                            <button className='call-to-action'>Company Administrator account</button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to='/companyStaffLogin'>
                            <button className='call-to-action'>Company Staff account</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default SignInCheck;