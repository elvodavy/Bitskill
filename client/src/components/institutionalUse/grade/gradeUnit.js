import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

//Localhost url for the server
const domain = "http://localhost:5000"; 

const GradeUnit = () => { 

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
                        <h6>Year of study</h6>
                        <select
                        class="save-dropdown input"
                        value={valueOption}
                        id="year-of-study"
                        onChange={handleSelect}
                        >
                        document.write("e");
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                        <option value="Year 4">Year 4</option>
                        <option value="Year 5">Year 5</option>
                        <option value="Year 6">Year 6</option>
                        <option value="Year 7">Year 7</option>
                        </select>
                        <br/>
                        <br/>
                        <h6>Semester</h6>
                        <select
                        class="save-dropdown input"
                        value={valueOption2}
                        id="semester"
                        onChange={handleSelect2}
                        >
                        document.write("e");
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                        <option value="Semester 3">Semester 3</option>
                        </select>
                        <br/>
                        <br/>
                        <h6>Unit name</h6>
                        <input type='text' className='input' placeholder='' id='unit'/>
                        <br/>
                        <br/>
                        <h6>Type of test</h6>
                        <select
                        class="save-dropdown input"
                        value={valueOption3}
                        id="test"
                        onChange={handleSelect3}
                        >
                        document.write("e");
                        <option value="Cat 1">Cat 1</option>
                        <option value="Cat 2">Cat 2</option>
                        <option value="Cat 3">Cat 3</option>
                        <option value="Assignment">Assignment</option>
                        <option value="Exam">Exam</option>
                        </select>
                        <br/>
                        <br/>              
                        <br/>
                        <Link to='/grade'>
                            <button className='call-to-action'>Next</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default GradeUnit;