import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <br></br>
            <br></br>
            <div className="navbar">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/name">Avenger Name</Link>
                <Link className="navLink" to="/url">Avenger Website</Link>
            </div>
        </div>
    )
}

export default Navbar