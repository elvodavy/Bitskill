import { React } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import  './addUnit.css';

//Images
import InfoIcon from '../../../assets/info (1).png';
import SearchIcon from '../../../assets/search-interface-symbol (2) 1.png';
import MinusIcon from '../../../assets/minus (1) 1.png';

const AddUnit = () => {
    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h5><b>Units</b></h5>  
                        <br/>  
                        <h6><b>Computer Science</b></h6>    
                        <br/>
                        <h6>Add Unit</h6>
                        <div className='add-div-input d-flex'>
                            <div className='row'>
                                <div className='col-md-8 add-input-div'>
                                    <input type='text' className='input' placeholder='eg.Programming' id='add-input'/>
                                </div>
                                <div className='col-md-4'>
                                <div className='add-button d-flex justify-content-center'>
                                    <span>Info</span>
                                    <div className='btn-icon'>
                                        <img src={InfoIcon} className='' alt=""/> 
                                    </div>
                                    </div>  
                                </div>
                            </div>
                        </div>           
                        <br/>
                        <div className='inner-display-card'>
                            <div className='d-flex'>
                                <input type='text' className='input' placeholder='search for unit' id='search'/> 
                                <div className='search-btn'>
                                    <img src={SearchIcon} className='search-icon' alt=""/>
                                </div>  
                            </div>
                            <br/>
                            <span><b>Units in Computer Science</b></span>
                            <ul className='view-list'>
                                <a className='view-list-link' data-bs-toggle="collapse" data-bs-target="#collapseExample" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <li>Electronics.</li>
                                </a>
                                <div className='collapse' id='collapseExample'>
                                    <div className='d-flex'>
                                        <div className='add-button d-flex justify-content-center' id='add-btn'>
                                            <span>Unit info</span>
                                            <div className='btn-icon'>
                                                <img src={InfoIcon} className='' alt=""/> 
                                            </div>
                                        </div> 
                                        <div className='add-button d-flex justify-content-center' id='remove-btn'>
                                            <span>Remove Course</span>
                                            <div className='btn-icon'>
                                                <img src={MinusIcon} className='' alt=""/> 
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <li>Java</li>
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

export default AddUnit;