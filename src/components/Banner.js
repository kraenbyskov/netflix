import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const FetchMyData = (setState, categori) => {
    fetch(`https://api.themoviedb.org/3/movie/${categori}?api_key=7c105b21789fdf773ab798b1c284f40e&language=en-US&page=1`)
        .then(response => response.json())
        .then(result => setState(result))
        .catch(error => console.log('error', error));
}


function Banner() {


    const [movieState, setMovieState] = useState()
    const [categori, setCategori] = useState("popular")


    useEffect(() => {
        FetchMyData(setMovieState, categori)
    }, [categori])



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    console.log(movieState)

    return (
        <Slider {...settings}>
            {movieState && movieState.map((movie) => {
                <div>

                </div>
            })}
        </Slider>

    )
}

export default Banner
