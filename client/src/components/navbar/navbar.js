import React from "react";
import "./navbar.css";

//Images
import logo from "../../assets/logo.png";
import account from "../../assets/account.png";


const Navbar = () => {
  return (
    <div className="container-fluid navbg">

        <div className="container">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"><img src={logo} className="img-fluid"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-bs-controls="navbarNavDropdown" aria-bs-expanded="false" aria-bs-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav center-links">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Solutions
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Student</a>
                            <a class="dropdown-item" href="#">Institution</a>
                            <a class="dropdown-item" href="#">Company</a>
                            <a class="dropdown-item" href="#">Artist</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Bitskill acclaim</a>
                            <a class="dropdown-item" href="#">Bitskill talent match</a>
                            <a class="dropdown-item" href="#">Bitskill workforce</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li >
                        <a class="account-icon" href="#"><img src={account} className="img-fluid"/></a>
                    </li>
                    </ul>
                   
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Navbar;