import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

//Images
import logo from "../../assets/logo.png";
import account from "../../assets/account.png";

const Navbar = () => {
  return (
    <div className="container-fluid navbg">

        <div className="container">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/"><img src={logo} className="img-fluid"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-bs-controls="navbarNavDropdown" aria-bs-expanded="false" aria-bs-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class=" d-flex justify-content-center">
                        <ul class="navbar-nav center-links">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/personalAccountSignUp">Student</a>
                                <Link class="dropdown-item" to="/institutionalUse">Institution</Link>
                                <a class="dropdown-item" href="/companySignUp">Company</a>
                                <a class="dropdown-item" href="/ArtistSignUp">Artist</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/products" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/bitskillAcclaim">Bitskill acclaim</a>
                                <a class="dropdown-item" href="/bitskillTalentMatch">Bitskill talent match</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboutUs">About Us</a>
                            </li>
                        </ul>
                        <div className="linkContainer account-icon">
                            <a type="button" className="dropdown" data-bs-toggle="collapse" data-bs-target="#profile" aria-controls="profile" aria-expanded="false" aria-label="Toggle navigation">
                                <div className="">
                                    <img className="profilePic" src={account}/>
                                </div>
                            </a>
                            <div className="d-flex justify-content-center">
                                <div className="profile-dropdown collapse" id='profile'>
                                    <br/>
                                    <Link to='/bitskillSolutions' className="profile-link">Sign Up</Link>
                                    <br/>
                                    <br/>
                                    <Link to='/signInCheck' className="profile-link">Sign In</Link>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Navbar;