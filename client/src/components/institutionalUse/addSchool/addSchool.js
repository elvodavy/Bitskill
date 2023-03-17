import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import  './addSchool.css';

//Images
import AddIcon from '../../../assets/add (3) 1.png';
import SearchIcon from '../../../assets/search-interface-symbol (2) 1.png';
import MinusIcon from '../../../assets/minus (1) 1.png';

const AddSchool = () => {

    const [addCourse, setAddCourse] = useState('/addCourse');

    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h5><b>Schools In your Institution</b></h5>     
                        <br/>
                        <h6>Add school</h6>
                        <div className='add-div-input d-flex'>
                            <div className='row'>
                                <div className='col-md-8 add-input-div'>
                                    <input type='text' className='input' placeholder='eg.School of Law' id='add-input'/>
                                </div>
                                <div className='col-md-4'>
                                <div className='add-button d-flex justify-content-center'>
                                    <span>Add</span>
                                    <div className='btn-icon'>
                                        <img src={AddIcon} className='' alt=""/> 
                                    </div>
                                    </div>  
                                </div>
                            </div>
                        </div>           
                        <br/>
                        <div className='inner-display-card'>
                            <div className='d-flex'>
                                <input type='text' className='input' placeholder='search for school' id='search'/> 
                                <div className='search-btn'>
                                    <img src={SearchIcon} className='search-icon' alt=""/>
                                </div>  
                            </div>
                            <br/>
                            <span><b>Schools in your institution</b></span>
                            <ul className='view-list'>
                                <a className='view-list-link' data-bs-toggle="collapse" data-bs-target="#collapseExample" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <li>School of Science, Engineering and Technology.</li>
                                </a>
                                <div className='collapse' id='collapseExample'>
                                    <div className='d-flex'>
                                        <Link to={addCourse}>
                                            <div className='add-button d-flex justify-content-center' id='add-btn'>
                                                <span>Add Course</span>
                                                <div className='btn-icon'>
                                                    <img src={AddIcon} className='' alt=""/> 
                                                </div>
                                            </div> 
                                        </Link> 
                                        <div className='add-button d-flex justify-content-center' id='remove-btn'>
                                            <span>Remove School</span>
                                            <div className='btn-icon'>
                                                <img src={MinusIcon} className='' alt=""/> 
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <li>School of Pharmacy</li>
                            </ul>         
                        </div>
                        <br/>
                        <br/>
                        <Link to='/dashboard'>
                            <button className='call-to-action'>Complete</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default AddSchool;