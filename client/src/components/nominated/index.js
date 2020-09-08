import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn } from "mdbreact";


const Nominated = () => {

    return (
        <MDBContainer>
            <MDBListGroup style={{ width: "30rem" }}>
                <MDBListGroupItem active href="#" style={{
                    color: "black", backgroundColor: "#fff", border: "none"
                }}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Title</h5>
                        <MDBBtn color="danger">Remove</MDBBtn>
                    </div>
                    <p className="mb-1">Short description</p>
                    <small>Year</small>
                </MDBListGroupItem>
            </MDBListGroup>
        </MDBContainer>
    )
}

export default Nominated;