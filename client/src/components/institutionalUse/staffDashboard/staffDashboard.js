import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './staffDashboard.css';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

const StaffDashboard = () => {

    const [courses, setCourses] = useState(8);

    return(
            <div className='container-fluid' id='bgcolor'>
                <NavbarSignedIn/>
                <div className='container'>
                   <div className='row rowPadding'>
                        <div className='col-md-3'>
                            <div className='dashboard-navigation'>
                                <div className='heading-div'>
                                    <h3 className='text-center'>Dashboard</h3>
                                </div>
                                <div className='dashboard-navlinks'>
                                    <ul>
                                        <Link to='/InstitutionProfile' className='d-link'>
                                            <li className='dashboard-link'>
                                                Profile
                                            </li> 
                                        </Link>
                                        <br/>
                                        <Link to='/addSchool' className='d-link'>
                                            <li className='dashboard-link'>
                                                Units
                                            </li>
                                        </Link>
                                        <br/>
                                        <Link to='/gradeUnit' className='d-link'>
                                            <li className='dashboard-link'>
                                                Grading
                                            </li>
                                        </Link>
                                        <br/>
                                        <Link to='/students' className='d-link'>
                                            <li className='dashboard-link'>
                                                Students
                                            </li>
                                        </Link>
                                        <br/>
                                        <Link to='/studentScore' className='d-link'>
                                            <li className='dashboard-link'>
                                                Student Score
                                            </li>
                                        </Link>
                                        <br/>
                                        <Link to='/certificates' className='d-link'>
                                            <li className='dashboard-link'>
                                                Certificates
                                            </li>
                                        </Link>
                                        <br/>
                                        <Link to='/analytics' className='d-link'>
                                            <li className='dashboard-link'>
                                                Analytics
                                            </li>
                                        </Link>
                                        <br/>
                                        <Link to='/settings' className='d-link'>
                                            <li className='dashboard-link'>
                                                Settings
                                            </li>
                                        </Link>
                                        <br/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 dashboard-Col'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='data-card'>
                                        <h5 className='text-center'>Schools</h5>
                                        <h1 className='number text-center'><b>{courses}</b></h1>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='data-card'>
                                        <h5 className='text-center'>Courses</h5>
                                        <h1 className='number text-center'><b>{courses}</b></h1>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='data-card'>
                                        <h5 className='text-center'>Staff</h5>
                                        <h1 className='number text-center'><b>{courses}</b></h1>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='data-card'>
                                        <h5 className='text-center'>Students</h5>
                                        <h1 className='number text-center'><b>{courses}</b></h1>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className='data-card'>
                                <h5 className='text-center'>Units</h5>
                                <h1 className='number text-center'><b>{courses}</b></h1>
                            </div>
                        </div>
                        <div className='col-md-4 dashboard-Col'>
                            <div className='data-card'>
                                <h5 className='text-center'>Population</h5>
                                <h1 className='number text-center'><b>{courses}</b></h1>
                            </div>
                            <br/>
                            <div className='data-card'>
                                <h5 className='text-center'>Institution Details</h5>
                                <h1 className='number text-center'><b>{courses}</b></h1>
                            </div>
                        </div>
                   </div> 
                </div>               
            </div>
    );
}

export default StaffDashboard;