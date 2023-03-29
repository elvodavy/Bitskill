import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSignedIn from '../../navBar/navbarSignedIn';
import  './addCourse.css';
import Cookies from 'cookies-js';

//Images
import AddIcon from '../../../assets/add (3) 1.png';
import SearchIcon from '../../../assets/search-interface-symbol (2) 1.png';
import MinusIcon from '../../../assets/minus (1) 1.png';

const AddCourse = () => {

    const [addUnit, setAddUnit] = useState('/addUnit');

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
    Cookies.set('unitName', itemName , { expires: 216000});
  }

  var cookiePathName=Cookies.get('courseName');

    return(
            <div className='container-fluid'>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h5><b>Courses</b></h5>  
                        <br/>  
                        <h6><b>{cookiePathName}</b></h6>    
                        <br/>
                        <h6>Add Course</h6>
                        <div className='add-div-input d-flex'>
                            <div className='row'>
                                <div className='col-md-8 add-input-div'>
                                    <input type='text' className='input' onChange={(e) => setValue(e.target.value)} value={value} placeholder='eg.Computer Science' id='add-input'/>
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
                                <input type='text' className='input' placeholder='search for course' id='search'/> 
                                <div className='search-btn'>
                                    <img src={SearchIcon} className='search-icon' alt=""/>
                                </div>  
                            </div>
                            <br/>
                            <span><b>Courses in School of Science, Engineering and technology</b></span>
                            <ul className='view-list'>
                                {(list.length) > 0 && list.map((item, index) =>
                                    <div>
                                        <a className='view-list-link' id='listValue' data-bs-toggle="collapse" data-bs-target={'#listId'+((index).toString())} href={'#listId'+((index).toString())} role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <li>{itemName = item}</li>
                                        </a>
                                        <div className='collapse' id={'listId'+((index).toString())}>
                                            <div className='d-flex'>
                                                <Link to={addUnit}>
                                                    <div className='add-button d-flex justify-content-center' id='add-btn' onClick={setName}>
                                                        <span>Add Unit</span>
                                                        <div className='btn-icon'>
                                                            <img src={AddIcon} className='' alt=""/> 
                                                        </div>
                                                    </div> 
                                                </Link> 
                                                <div className='add-button d-flex justify-content-center' id='remove-btn'>
                                                    <span>Remove Course</span>
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

export default AddCourse;