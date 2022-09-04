import React from "react";
import '../index.css'

import hero from '../Images/photo-grid.png'

export default function Hero(){
    return(
            <div className="mid">
                <img className="mid-hero" src = {hero} alt = "abnb"/>
                <h1 className="mid-header">Online experiences</h1>
                <p className="mid-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>

    )
}