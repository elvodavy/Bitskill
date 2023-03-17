import { React } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';


const InstitutionalUse = () => {
    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h3 className='text-center'>Institution Information</h3>
                        <br/>
                        <h6>Name of Institution</h6>
                        <input type='text' className='input' placeholder='' id='institution-name'/>
                        <br/>
                        <br/>
                        <h6>Type of Institution</h6>
                        <input type='text' className='input' placeholder='' id='institution-type'/>
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