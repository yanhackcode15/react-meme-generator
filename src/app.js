import React from "react"
import ReactDOM from "react-dom"
import Nav from "./components/nav"
import data from "../data"
import Card from "./components/card"



export default function App() {
    const mapper = (item) => {
       return(
            <Card 
                {...item}
            />
       ) 
    }

    return (
        <div>
            <Nav />
            <div className="content">
                {data.map(mapper)}
            </div>
        </div>
    )
}