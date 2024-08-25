import React from "react";
import HeaderLogo from "../assets/TP-logo.webp";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div class="header  border border ">
        <nav class="navbar   navbar-expand-lg .collapse.navbar-collapse py-4 mx-4  ps-1  bg-body-tertiary d-flex custom-gap flex-nowrap">
            <div class="logo">
                <img src={HeaderLogo} alt="header-logo" class="img-thumbnail" height="36px" width="150px"/>
            </div>
            <div class="navbar-sign  d-flex ">
                <div class="nav-items">
                    <ul class="items-signin d-flex gap-5">
                        <li class="nav-item">
                            <a href="#" class="fw-bold text-black">Car Tyres</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="fw-bold text-black">Bike Tyres</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="fw-bold text-black">Tyre Pressure</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="fw-bold text-black">Accessories</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="fw-bold text-black">More</a>
                        </li>
                    </ul>
                </div>
                <div class="sign-in  d-flex  gap-1 ms-3 fw-medium align-items-center"><FiUser  class="icon"/>Login</div>
            </div>
        </nav>
    </div>

  );
};

export default Header;
