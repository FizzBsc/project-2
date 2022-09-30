import React from "react";
import '../index.css'



export default function Card(props){
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
        
    }
    
    return(
        <div className="card-body">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card-KZ" src = {`../${props.card.coverImg}`} alt = "abnb"/>
                <div className="card-title">
                    {/*<img className="card-star" src = {STAR} alt = "star"/>*/}

                    <p>{/*{props.card.rating}*/}<span className="rating">{rating (props.card.stats.rating)}</span> <span className="subtext">({props.card.stats.reviewCount}) &#8729; {props.card.location}</span></p>
                </div>
                <p>{props.card.title}</p>
                
                <p>{props.card.price != null && <b>From ${props.card.price}</b>} {props.card.unit != null && `per ${props.card.unit}`}</p>
        </div>
    )
}

function rating (x){
    let star = "★"
    let empstar = "☆"

    star =star.repeat(x);
    empstar = empstar.repeat(5-x);
    return star+empstar;
}
