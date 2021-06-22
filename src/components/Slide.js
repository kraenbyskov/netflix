import React from 'react'

function Slide({ movie }) {
    return (
        <div>
            <h3>Release date : {movie.release_date}</h3>
            <h3>Rating {movie.vote_average}</h3>
            <ul>
                Rating {movie.genre_ids.map((genre) => (
                    <li>{genre}</li>
                ))
                }
            </ul>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <button>Watch</button>
            <button>Add to List</button>
        </div>
    )
}

export default Slide
