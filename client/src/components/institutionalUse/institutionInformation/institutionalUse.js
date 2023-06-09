import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavbarSignedIn from '../../navBar/navbarSignedIn';

//Localhost url for the server
const domain = "http://localhost:5000"; 

const InstitutionalUse = () => { 

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
                        <h3 className='text-center'>Institution Information</h3>
                        <br/>
                        <h6>Name of Institution</h6>
                        <input type='text' className='input' placeholder='' id='institution-name'/>
                        <br/>
                        <br/>
                        <h6>Type of Institution</h6>
                        <select
                        class="save-dropdown input"
                        value={valueOption}
                        id="Institution-type"
                        onChange={handleSelect}
                        >
                        document.write("e");
                        <option value="Higher Education">Higher Education</option>
                        <option value="Highschool">Highschool</option>
                        <option value="Primary">Primary School</option>
                        </select>
                        <br/>
                        <br/>
                        <h6>Address</h6>
                        <input type='text' className='input' placeholder='' id='address'/>
                        <br/>
                        <br/>
                        <h6>Institution Population</h6>
                        <input type='Number' className='input' placeholder='' id='population'/>
                        <br/>
                        <br/>
                        <br/>
                        <Link to='/introduction'>
                            <button className='call-to-action'>Proceed</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default InstitutionalUse;