import React, { useEffect, useState } from 'react'
import styled from "styled-components";


const ImageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"


const SlideStyle = styled.div`
    width:100%;
    height:700px;
    background-image:url(${ImageUrl}${(props) => props.backgroundImage});
    background-size:cover;
    background-position:center;
`




function Slide({ movie }) {
    return (
        <SlideStyle backgroundImage={movie.backdrop_path} >
            <h3>Release date : {movie.release_date}</h3>
            <h3>Rating {movie.vote_average}</h3>
            <ul>
                {movie.genre_ids.map((genre) => (
                    <li>{genre}</li>
                ))
                }
            </ul>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <button>Watch</button>
            <button>Add to List</button>
        </SlideStyle>
    )
}

export default Slide
