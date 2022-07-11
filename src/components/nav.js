import React from "react"
import logo from "../images/logo.png"

export default function Nav() {
    return (
        <div className="nav">
            <img className="logo-image" src={logo} />
            <span className="title">my travel journal</span>
        </div>
    )
}