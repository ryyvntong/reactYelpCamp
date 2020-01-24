import React from 'react';
// import classes from './campground.module.css'
const campground =(props)=>{
    // let campgroundList=props.campgrounds.map(cg=>{
    //     <li>{cg}</li>
    // })
    return(
        <div>
            <h4>{props.campground}</h4>
            <img src={props.image}></img>
        </div>
    )
}

export default campground