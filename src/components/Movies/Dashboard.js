import React, { useState } from "react";

function Dashboard() {

    const [movies, setMovies] = useState("")

    fetch()
    .then((response) => response.json())
    .then((data) => setMovies(data))
    return(
        <div>
            {movies.map((movie) => 
                <div key={movie.id} className="card">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <h2>{movie.year}</h2>
                </div>
            )}
        </div>
    )
}

export default Dashboard