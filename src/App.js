import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data1 from "./Components/data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cardArray = data1.map(card => {
        return <Card 
        key = {card.id}
        card = {card} />
    })
    return (
    <div>
        <Navbar />
        <Hero />
        <div className="rowcard">
            {cardArray}
        </div>
    </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))