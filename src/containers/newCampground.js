import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

export class newCampground extends Component {
    state={
        campgroundName:"",
        imageURL:""
    }
    postDataHandler = () => {
        const data = {
            title: this.state.campgroundName,
            imageLink:this.state.imageURL
        };
        axios.post('http://localhost:3000/campgrounds', data)
            .then(response => {
                console.log("");
            });
    }
    render(){
        return(
            <div>
                <h1>Create a new Campground!</h1>
                    <label>Campground Name:</label>
                    <input type="text" value={this.state.campgroundName} onChange={(event) => this.setState({campgroundName: event.target.value})} />
                    <label>Campground Image URL:</label>
                    <input type="text" value={this.state.imageURL} onChange={(event) => this.setState({imageURL: event.target.value})} />
                    <button onClick={this.postDataHandler}>Submit Campground</button>
            </div>
        )
    
    }};


export default newCampground