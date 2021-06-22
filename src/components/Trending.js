import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import MovieCover from "./MovieCover"



const FetchMyData = (setState, categori) => {
    fetch(
        `https://api.themoviedb.org/3/movie/${categori}?api_key=7c105b21789fdf773ab798b1c284f40e&language=en-US&page=1`
    )
        .then((response) => response.json())
        .then((result) => setState(result))
        .catch((error) => console.log('error', error));
};


function Trending() {

    const [movieState, setMovieState] = useState();
    const [categori, setCategori] = useState('popular');
    useEffect(
        () => {
            FetchMyData(setMovieState, categori);
        },
        [categori]
    );
    console.log(movieState)


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 8,
        slidesToScroll: 8
    };

    return (
        <Slider {...settings}>
            {movieState && movieState.results.map((movie, index) => (
                <MovieCover movie={movie}>{index}</MovieCover>
            ))}
        </Slider>
    )
}

export default Trending
