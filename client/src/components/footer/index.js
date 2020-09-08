import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";


const Footer = () => {

    return (
        <MDBFooter color="elegant-color-dark" className="font-small mt-4 fixed-bottom" >
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright Sarah Sakhri
          </MDBContainer>
            </div>
        </MDBFooter>
    )
}

export default Footer;