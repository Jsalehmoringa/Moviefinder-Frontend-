import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">
            <nav className="top">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/registerpage">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/mymovies">My Movies</Link>
            </nav>
            <h1 className="bottom">Welcome to Moviefinder.Where all you cinephiles can keep track of your favorites. Have a blast!
            </h1>
        </div>
    )
}

export default Homepage;