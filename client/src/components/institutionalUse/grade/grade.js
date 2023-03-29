import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

//Localhost url for the server
const domain = "http://localhost:5000"; 

const Grade = () => { 

    const checkAuth = () =>{
        Axios.post(domain + "/api/protected", {
            
          }).then((response) => {
            console.log(response.data.message);
          });
    }

    const [valueOption, setValue] = useState("");

    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    const [valueOption2, setValue2] = useState("");

    const handleSelect2 = (event) => {
        setValue2(event.target.value);
    };

    const [valueOption3, setValue3] = useState("");

    const handleSelect3 = (event) => {
        setValue3(event.target.value);
    };

    const [valueOption4, setValue4] = useState("");

    const handleSelect4 = (event) => {
        setValue4(event.target.value);
    };

    return(
            <div className='container-fluid' onLoad={checkAuth}>
                <NavbarSignedIn/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h3 className='text-center'>Student Grading</h3>
                        <br/>
                        <h6>Students Name</h6>
                        <input type='text' className='input' placeholder='' id='students-name'/>
                        <br/>
                        <br/>
                        <h6>Students Registration/Admission number</h6>
                        <input type='text' className='input' placeholder='' id='students-reg'/>
                        <br/>
                        <br/>
                        <h6>Grade</h6>
                        <select
                        class="save-dropdown input"
                        value={valueOption4}
                        id="grade"
                        onChange={handleSelect4}
                        >
                        document.write("e");
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                        </select>
                        <br/>
                        <br/>
                        <br/>
                        <Link to='/studentScore'>
                            <button className='call-to-action'>Complete</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default Grade;