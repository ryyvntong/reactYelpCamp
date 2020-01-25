import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
// import {connect} from 'react-redux'
export class LandingPage extends Component {
    render(){
        
        return(
            <div>
                <Link to="/campgrounds">Campgrounds Link!!</Link>
                <Link to="/campgrounds/new">Click to add a new campground!</Link>
                <h1>Landing!</h1>
            </div>

            
        )
    }};


export default LandingPage