import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import  './addUnit.css';
import NavbarSignedIn from '../../navBar/navbarSignedIn';
import Cookies from 'cookies-js';

//Images
import InfoIcon from '../../../assets/info (1).png';
import AddIcon from '../../../assets/add (3) 1.png';
import SearchIcon from '../../../assets/search-interface-symbol (2) 1.png';
import MinusIcon from '../../../assets/minus (1) 1.png';

const AddUnit = () => {

    const [unitInfo, setUnitInfo] = useState('/unitInfo');

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
    Cookies.set('unitInfo', itemName , { expires: 216000});
  }

  var cookiePathName=Cookies.get('unitName');

    return(
            <div className='container-fluid'>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h5><b>Units</b></h5>  
                        <br/>  
                        <h6><b>{cookiePathName}</b></h6>    
                        <br/>
                        <h6>Add Unit</h6>
                        <div className='add-div-input d-flex'>
                            <div className='row'>
                                <div className='col-md-8 add-input-div'>
                                    <input type='text' className='input' onChange={(e) => setValue(e.target.value)} value={value} placeholder='eg.Programming' id='add-input'/>
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
                                <input type='text' className='input' placeholder='search for unit' id='search'/> 
                                <div className='search-btn'>
                                    <img src={SearchIcon} className='search-icon' alt=""/>
                                </div>  
                            </div>
                            <br/>
                            <span><b>Units in Computer Science</b></span>
                            <ul className='view-list'>
                            {(list.length) > 0 && list.map((item, index) =>
                                <div>
                                    <a className='view-list-link' id='listValue' data-bs-toggle="collapse" data-bs-target={'#listId'+((index).toString())} href={'#listId'+((index).toString())} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <li>{itemName = item}</li>
                                    </a>
                                    <div className='collapse' id={'listId'+((index).toString())}>
                                        <div className='d-flex'>
                                            <Link to={unitInfo}>
                                                <div className='add-button d-flex justify-content-center' id='add-btn'>
                                                    <span>Unit info</span>
                                                    <div className='btn-icon'>
                                                        <img src={InfoIcon} className='' alt=""/> 
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

export default AddUnit;