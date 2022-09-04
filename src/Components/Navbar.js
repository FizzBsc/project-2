import React from "react";
import '../index.css'
import logo from '../Images/airbnb-logo.png'
import hero from '../Images/photo-grid.png'

export default function Navbar(){
    return(
        <nav className="nav-container">
            <div className="head">
                <img className="head-image" src = {logo} alt = "abnb"/>
            </div>
        </nav>
    )
}