import { React } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './bitskillSolutions.css'

const BitskillSolutions = () => {
    return(
            <div className='container-fluid'>
                <Navbar/>
                <div className='container d-flex justify-content-center'>
                    <div className='solution-select-container'>
                        <h3 className='text-center'><b>How do you intent to use Bitskill?</b></h3>
                        <br/> 
                        <br/>
                        <Link to='/personalUse'>
                            <button className='call-to-action'>Personal use</button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to='/institutionalUse'>
                            <button className='call-to-action'>Institutional use</button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to='companyUse'>
                            <button className='call-to-action'>Company use</button>
                        </Link>
                        <br/>
                    </div>
                </div>               
            </div>
    );
}

export default BitskillSolutions;