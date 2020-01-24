import React, {Component} from 'react'
import {connect} from 'react-redux'
import Campground from '../components/campground/campground'
export class LandingPage extends Component {
    state={
        campgrounds:[
            {name:"Salmon Creek",image:"https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c722673d79449c150_340.jpg"},
            {name:"Granite Hill",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c722673d79449c150_340.jpg"},
            {name:"Mountain Goats Rest",image:"https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c722673d79449c150_340.jpg"}
        ]

    }
    render(){
        let campgrounds=         
        this.state.campgrounds.map(campground=>(
            <Campground
            campground={campground.name}
            image={campground.image}/>

        ))

    
    
        return(
            <div>
                <h1>This is the Campgrounds page!</h1>
                {campgrounds}
            </div>
        )
    }};


export default LandingPage