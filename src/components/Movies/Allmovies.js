import React from "react";
import { Link } from "react-router-dom";

function Allmovies({ movies, handleDeleteMovie }) {

    function handleDelete(id) {
        fetch(`http://127.0.0.1:9292/movies/destroy/${id}`, { 
            method: "DELETE",
        })

        handleDeleteMovie(id)
      }
 
    return(
        <div className="cards">
            {movies.map((movie) => 
                <div key={movie.id} className="card">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <img className="card-img-top" src={movie.movie_url} alt={movie.movie_url}></img>
                    <h2>{movie.year}</h2>
                    {movie.originally_fetched === false && (
                        <button onClick={() => handleDelete(movie.id)}>Delete</button>
                    )}
                    {movie.originally_fetched === false && (
                        <Link to={`/update/${movie.id}`}>Update</Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default Allmovies;