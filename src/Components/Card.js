import React from "react";
import '../index.css'
import KZ from '../Images/katie-zaferes.png'
import STAR from '../Images/star.png'


export default function Card(){
    return(
        <div className="card-body">
                <img className="card-KZ" src = {KZ} alt = "abnb"/>
                <div className="card-title">
                <img className="card-star" src = {STAR} alt = "star"/>
                <p>5.0  </p>
                </div>

        </div>
    )
}