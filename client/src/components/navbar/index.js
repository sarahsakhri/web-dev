import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {

    return (
        <Router>
            <MDBNavbar color="elegant-color-dark" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Movie Nominations</strong>
                </MDBNavbarBrand>
            </MDBNavbar>
        </Router>
    )
}

export default Navbar;