import React from 'react'

const Navbar = () => {
    const usuario = "Nicolas"
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <span className="navbar-brand">
                    <h2>{usuario}</h2>
                </span>
                
            </div>

        </nav>
    )
}

export default Navbar
