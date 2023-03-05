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
            <h1 className="bottom">Welcome to MovieInterest.This is the best movie site to search movies and add any movie that you like.I hope 
                you enjoy your experience!
            </h1>
        </div>
    )
}

export default Homepage;