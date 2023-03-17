import React from "react";
import './solutions.css';

//Images
import Highschool from '../../../assets/highschool 1.png';
import University from '../../../assets/mortarboard 1.png';
import Company from '../../../assets/enterprise 1.png';
import Artist from '../../../assets/painter 1.png';

const Solutions = () =>{
    
    return(
        <div className="container-fluid solutions-container">
            <div className="container">
                <div className="row row-padding">
                    <div className="col-md-3">
                        <div className="solutions-card card">
                            <div className="d-flex">
                                <div>
                                    <img src={Highschool} className="img-fluid" alt='Highschool-icon'/>
                                </div>
                                <h4 className="solution-card-heading">Highschool</h4>
                            </div>
                            <br/>
                            <p className="card-p">
                            Bitskill provides students with a digital wallet that stores their digital
                             credentials and achievements. 
                            </p>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="solutions-card card">
                            <div className="d-flex">
                                <div>
                                    <img src={University} className="img-fluid" alt='University-icon'/>
                                </div>
                                <h4 className="solution-card-heading">University</h4>
                            </div>
                            <br/>
                            <p className="card-p">
                            Universities can now issue digital certificates using bitskill since the
                             Blockchain technology has been optimized to be scalable and effective.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="solutions-card card">
                            <div className="d-flex">
                                <div>
                                    <img src={Company} className="img-fluid" alt='Company-icon'/>
                                </div>
                                <h4 className="solution-card-heading">Company</h4>
                            </div>
                            <br/>
                            <p className="card-p">
                            Digital course completion certificates are now essential for building 
                            brand awareness, and they can be sent reliably and without a single point 
                            of failure using Bitskill.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="solutions-card card">
                            <div className="d-flex">
                                <div>
                                    <img src={Artist} className="img-fluid" alt='Artist-icon'/>
                                </div>
                                <h4 className="solution-card-heading">Artist</h4>
                            </div>
                            <br/>
                            <p className="card-p">
                            Bitskill allows for the protection of a physical or digital product. 
                            Through a few easy actions, artists can establish their undisputed authorship 
                            while safeguarding their creations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions;