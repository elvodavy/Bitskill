import { React } from 'react';
import { Link } from 'react-router-dom';
import NavbarSignedIn from '../../navBar/navbarSignedIn';


const Introduction = () => {
    return(
            <div className='container-fluid'>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h6 className=''>Welcome,</h6><br/>
                        <p className=''>
                        We are happy to serve your Institution
                        and help you explore Endless <br/>possibilities with 
                        the help of your institution's student and <br/>academic data.
                        <br/>
                        <br/>

                       To get you started, we need to collect some basic 
                       Information <br/>about your institution. 
                       <br/>
                       <br/>
                        <em><b>NB:</b>
                        You can always make changes of the 
                        Information you provide <br/>at your Institution Dashboard</em>
                        </p>
                        <br/>                                           
                        <br/>
                        <Link to='/addSchool'>
                            <button className='call-to-action'>Get Started</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default Introduction;