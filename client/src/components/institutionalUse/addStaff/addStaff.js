import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

//Localhost url for the server
const domain = "http://localhost:5000"; 

const AddStaff = () => { 

    const checkAuth = () =>{
        Axios.post(domain + "/api/protected", {
            
          }).then((response) => {
            console.log(response.data.message);
          });
    }

    const [valueOption, setValue] = useState("Institution type");

    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    return(
            <div className='container-fluid' onLoad={checkAuth}>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h3 className='text-center'>Add Staff</h3>
                        <br/>
                        <h6>Firstname</h6>
                        <input type='text' className='input' placeholder='' id='Firstname'/>
                        <br/>
                        <br/>
                        <h6>Lastname</h6>
                        <input type='text' className='input' placeholder='' id='Lastname'/>
                        <br/>
                        <br/>
                        <h6>Id Number</h6>
                        <input type='Number' className='input' placeholder='' id='population'/>
                        <br/>
                        <br/>
                        <h6>Title</h6>
                        <input type='text' className='input' placeholder='' id='title'/>
                        <br/>
                        <br/>
                        <h6>Gender</h6>
                        <div className='d-flex'>
                            <label for='male'>
                                <div>Male</div>
                                <div><input type='radio' className='input' name='name' value='male' placeholder='' id='address'/></div>
                            </label>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <label for='female'>
                                <div>Female</div>
                                <div><input type='radio' className='input' name='name' value='female' placeholder='' id='address'/></div>
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <Link to='/addStaffAccount'>
                            <button className='call-to-action'>Add Lecturer</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default AddStaff;