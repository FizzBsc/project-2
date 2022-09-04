import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
    <div>
        <Navbar />
        <Hero />
        <Card />
    </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))