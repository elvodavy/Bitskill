import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSignedIn from '../../navBar/navbarSignedIn';
import  './addSchool.css';
import Cookies from 'cookies-js';
import Cookie from 'js-cookie';

//Images
import AddIcon from '../../../assets/add (3) 1.png';
import SearchIcon from '../../../assets/search-interface-symbol (2) 1.png';
import MinusIcon from '../../../assets/minus (1) 1.png';

const AddSchool = () => {

    const [addCourse, setAddCourse] = useState('/addCourse');

    const [list, setList] = useState([]);

    const [value, setValue] = useState("");

    const addToList = () => {

    let tempArr = list;

    tempArr.push(value);

    setList(tempArr);

    setValue("");

  };

  var itemName;

  const setName = () =>{
    Cookies.set('courseName', itemName , { expires: 216000});
  }
    
    return(
            <div className='container-fluid'>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h5><b>Schools In your Institution</b></h5>     
                        <br/>
                        <h6>Add school</h6>
                        <div className='add-div-input d-flex'>
                            <div className='row'>
                                <div className='col-md-8 add-input-div'>
                                    <input type='text' className='input' onChange={(e) => setValue(e.target.value)} value={value} placeholder='eg.School of Law' id='add-input'/>
                                </div>
                                <div className='col-md-4'>
                                <div className='add-button d-flex justify-content-center' onClick={addToList}>
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
                            {(list.length) > 0 && list.map((item, index) =>
                                <div>
                                    <a className='view-list-link' id={'listValue'+((index).toString())} data-bs-toggle="collapse" data-bs-target={'#listId'+((index).toString())} href={'#listId'+((index).toString())} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <li>{itemName = item}</li>
                                    </a>
                                    <div className='collapse' id={'listId'+((index).toString())}>
                                        <div className='d-flex'>
                                            <Link to={addCourse}>
                                                <div className='add-button d-flex justify-content-center' id='add-btn' onClick={setName}>
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

export default AddSchool;