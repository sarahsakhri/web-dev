import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBFormInline, MDBListGroup, MDBListGroupItem, MDBBtn } from "mdbreact";

import API from "../utils/API";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Nominated from "../components/nominated";
import Results from "../components/results";
import Search from "../components/searchForm";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            data: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // console.log(this.state);
    }

    handleChange(event) {
        this.setState({ title: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        API.movie(this.state.title)
            .then((res) => {
                console.log("movie submitted");
                // console.log(res.data.Search);
                // if (res.data.Search.Type =y= "movie") {
                this.setState({ data: res.data.Search })
                // }
            })
        console.log(this.state.data);

    }

    nominateMovie(id) {
        alert("You have nominated " + this.state.data[id].Title);
        console.log(id);

        this.setState({
            data: this.state.data.map(movie => {
                if (movie.id == id) {
                    movie.status = true;
                }
                return movie;
            })
        })
        console.log(this.state.data[id]);
    }

    indexingArr(arr) {
        arr.forEach((element, i) => {
            element.status = false;
            element.id = i + 1;
        });
    }

    removeMovie(id) {
        console.log(id);

        this.setState(state => ({
            data: state.data.filter(movie => movie.id !== id)
        }))
        console.log(this.state.data[id]);
    }


    render() {
        const arr = Object.values(this.state.data);
        this.indexingArr(arr);

        return (
            <div className="App" >
                <Navbar> </Navbar>
                <MDBContainer>

                    <MDBRow>
                        <MDBCol md="3">
                        </MDBCol>
                        <MDBCol md="8">
                            {/* <Search callBack={this.callBack.bind(this)}></Search> */}
                            <div>
                                <MDBCol>
                                    <MDBFormInline className="md-form" onSubmit={this.handleSubmit}>
                                        <input className="form-control " size="50" type="text" placeholder="Search for a movie title"
                                            aria-label="Search" title={this.state.title} onChange={this.handleChange} />
                                        <MDBBtn color="dark" rounded size="md" type="submit" className="mr-auto"
                                        >
                                            Search </MDBBtn>
                                    </MDBFormInline>
                                </MDBCol>
                            </div>
                        </MDBCol>
                        <MDBCol md="1">
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br></br>
                <br>
                </br>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            {/* <Results data={this.state.data} /> */}
                            <MDBContainer>
                                <MDBListGroup style={{ width: "30rem" }}>
                                    {arr.map(({ id, Title, Year, Poster, status }) => (

                                        < MDBListGroupItem active href="#" style={{
                                            color: "black", backgroundColor: "#fff"
                                        }} >
                                            <div className="d-flex w-100 justify-content-between" key={id}>
                                                <br></br>
                                                <h4 className="mb-1">{Title}</h4>
                                                <br>
                                                </br>
                                                {/* <img src={Poster} style={{ width: "50rem" }}></img> */}
                                                <MDBBtn color={(status) ? 'grey' : 'amber'} disabled={status} onClick={this.nominateMovie.bind(this, id - 1)} >Nominate</MDBBtn>
                                            </div>
                                            <small>Year: {Year}</small>
                                        </MDBListGroupItem>
                                    ))}
                                </MDBListGroup>
                            </MDBContainer >
                        </MDBCol>
                        <MDBCol md="6">
                            {/* <Nominated /> */}
                            <MDBContainer>
                                <MDBListGroup style={{ width: "30rem" }}>
                                    {arr.map(({ id, Title, Year, Poster }) => (
                                        < MDBListGroupItem active href="#" style={{ color: "black", backgroundColor: "#fff" }} >
                                            <div className="d-flex w-100 justify-content-between" key={id}>
                                                <br></br>
                                                <h4 className="mb-1">{Title}</h4>
                                                <br>
                                                </br>
                                                {/* <img src={Poster} style={{ width: "50rem" }}></img> */}
                                                <MDBBtn color="amber" onClick={this.removeMovie.bind(this, id - 1)} >Remove</MDBBtn>
                                            </div>
                                            <small>Year: {Year}</small>
                                        </MDBListGroupItem>
                                    ))}
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer></Footer>

            </div >
        )

    };
}

export default Main;
