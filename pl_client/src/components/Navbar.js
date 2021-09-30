import React from 'react'
import '../App.css'

export default function Navbar() {
    return (
        <section className="navbar">
            <a href="/" className="navlink">Home</a>
            <a href="/shows" className="navlink">Shows</a>
            <a href="/superfans" className="navlink">Superfans</a>
            <a href="/gallery" className="navlink">Gallery</a>
        </section>
    )
}
