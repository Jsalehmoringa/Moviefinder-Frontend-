import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Allmovies from "./Allmovies";


function Dashboard() {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }