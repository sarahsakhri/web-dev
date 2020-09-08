import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBBtn, MDBContainer } from "mdbreact";


class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nominate: false,
        }
    }

    nominateMovie(i) {
        alert("you have nominated a movie");
        console.log(i);
        // this.setState({ nominate: true })
    }

    render() {
        const arr = Object.values(this.props.data)
        // const movies = this.props.data;
        return (
            <MDBContainer>
                <MDBListGroup style={{ width: "30rem" }}>
                    {arr.map(({ id, Title, Year }) => (
                        <MDBListGroupItem active href="#" style={{
                            color: "black", backgroundColor: "#fff"
                        }} key={id}>
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">{Title}</h4>
                                <MDBBtn color="amber" onClick={this.nominateMovie.bind(this.id)}>Nominate</MDBBtn>
                            </div>
                            <small>Year: {Year}</small>
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            </MDBContainer >
        )
    }

}

export default Results;