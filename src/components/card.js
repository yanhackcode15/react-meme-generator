import React from "react"
import symbol from "../images/symbol.png"


export default function Card(props) {
   
    return (
        <div className="card">
            <img className="card-image" src={props.image} />
            <div className="card-content">
                <div className="symbol-country-link">
                    <img className="symbol" src={symbol} />
                    <span className="country">{props.country}</span>
                    <a className="link" href={props.mapLink} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="location">{props.location}</h1>
                <h4 className="time">{props.time}</h4>
                <p className="description">{props.description}</p>
            </div>
        </div>
        
    )
}