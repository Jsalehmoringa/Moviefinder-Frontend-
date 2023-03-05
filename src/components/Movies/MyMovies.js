import React, { useState } from "react";

function MyMovies() {

    const [mymovies, SetMymovies] = useState()

    fetch()
    .then((response) => response.json())
    .then((data) => SetMymovies(data))
    return(
        <div>
            {mymovies.map((movie) =>
                <div key={movie.id} className="card">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <h2>{movie.year}</h2>
            </div>
            )}
        </div>
    )

}

export default MyMovies;