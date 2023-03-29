import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import  './institutionStaff.css';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

//Images
import InfoIcon from '../../../assets/info (1).png';
import AddIcon from '../../../assets/add (3) 1.png';
import SearchIcon from '../../../assets/search-interface-symbol (2) 1.png';
import MinusIcon from '../../../assets/minus (1) 1.png';

const InstitutionStaff = () => {

    const [staffInfo, setStaffInfo] = useState('/staffInfo');

    const [list, setList] = useState([]);

    const [value, setValue] = useState("");


    return(
            <div className='container-fluid'>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h5><b>Institution Staff</b></h5>  
                        <br/>
                        <div className='add-div-input d-flex'>
                            <div className='row'>
                                <Link to='/addStaff'>
                                    <div className='add-button d-flex justify-content-center'>
                                        <span>Add Staff</span>
                                        <div className='btn-icon'>
                                            <img src={AddIcon} className='' alt=""/> 
                                        </div>
                                    </div>  
                                </Link> 
                            </div>
                        </div>           
                        <br/>
                        <div className='inner-display-card'>
                            <div className='d-flex'>
                                <input type='text' className='input' placeholder='search for Staff' id='search'/> 
                                <div className='search-btn'>
                                    <img src={SearchIcon} className='search-icon' alt=""/>
                                </div>  
                            </div>
                            <br/>
                            <span><b>Staff</b></span>
                            <ul className='view-list'>
                            {(list.length) > 0 && list.map((item, index) =>
                                <div>
                                    <a className='view-list-link' id='listValue' data-bs-toggle="collapse" data-bs-target={'#listId'+((index).toString())} href={'#listId'+((index).toString())} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <li>{item}</li>
                                    </a>
                                    <div className='collapse' id={'listId'+((index).toString())}>
                                        <div className='d-flex'>
                                            <Link to={staffInfo}>
                                                <div className='add-button d-flex justify-content-center' id='add-btn'>
                                                    <span>Staff info</span>
                                                    <div className='btn-icon'>
                                                        <img src={InfoIcon} className='' alt=""/> 
                                                    </div>
                                                </div> 
                                            </Link> 
                                            <div className='add-button d-flex justify-content-center' id='remove-btn'>
                                                <span>Remove Staff</span>
                                                <div className='btn-icon'>
                                                    <img src={MinusIcon} className='' alt=""/> 
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                )}
                            </ul>         
                        </div>
                        <br/>
                        <br/>
                        <Link to='/institutionDashboard'>
                            <button className='call-to-action'>Complete</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default InstitutionStaff;