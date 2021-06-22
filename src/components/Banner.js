import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Slide from './Slide';
import styled from 'styled-components';

const FetchMyData = (setState, categori) => {
    fetch(
        `https://api.themoviedb.org/3/movie/${categori}?api_key=7c105b21789fdf773ab798b1c284f40e&language=en-US&page=1`
    )
        .then((response) => response.json())
        .then((result) => setState(result))
        .catch((error) => console.log('error', error));
};

const CustomSlider = styled(Slider)`
    
    ul {
        li {
            width:70px;
            .slickDots {
                width: 50px;
                    height: 5px;
                    margin: 10px;
                    background-color: rgba(100,100,100, 0.4);
                    transition: all 0.35s cubic-bezier(.35, 0, .1, 1);
                    border-radius:2px;

            }
        }
        .slick-active {
            .slickDots {
                background-color:var(--white)   
            }
        }
    }
`;

function Banner() {
    const [movieState, setMovieState] = useState();
    const [categori, setCategori] = useState('popular');
    useEffect(
        () => {
            FetchMyData(setMovieState, categori);
        },
        [categori]
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute',
                    zIndex: '1000',
                    bottom: '20px'
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className="slickDots" />
    };

    return (
        <CustomSlider {...settings}>
            {movieState && movieState.results.slice(0, 6).map((movie, index) => <Slide key={index} movie={movie} />)}
        </CustomSlider>
    );
}

export default Banner;
