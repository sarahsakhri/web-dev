import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import API from "../../utils/API";


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            data: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        API.movie(this.state.title)
            .then((res) => {
                console.log("movie submitted");
                console.log(res.data.Search);
                this.setState({ data: res.data.Search })
            })
        console.log(this.props.callBack);
        // clean input 
        this.setState({
            title: ''
        })
    }

    render() {
        return (
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
        )
    }

}

export default Search;