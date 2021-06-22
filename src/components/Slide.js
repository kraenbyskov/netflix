import React from 'react'
import styled from "styled-components";
import Genre from "./Genre"

const ImageUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/"

const margin = "20px";

const SlideStyle = styled.div`
    width:100%;
    height:900px;
    background-image:url(${ImageUrl}${(props) => props.backgroundImage});
    background-size:cover;
    background-position:center;

    h1 {
        font-size:60px;
        margin-bottom:${margin};
    }

    .overlay {
        width:100%;
        height:900px;
        background-color:rgba(0,0,0, 0.5);
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .content {
        width:70%;
    }
`

const GenreAndRating = styled.div`
    display:inline-flex;
    margin-top:${margin};
    margin-bottom:${margin};
    ul {
        display:inline-flex;
        li {
            list-style-type:none;
            padding-left:20px;
        }
    }
`

const Rating = styled.span`
    color:var(--secondary);
    i {
        color:var(--secondary);

    }
`


const Button = styled.button`

    padding:20px 40px;
    font-size:20px;
    background-color:var(--${(props) => props.color});
    border:0px;
    box-shadow:5px 5px 40px var(--${(props) => props.color});
    margin:40px 10px;
    border-radius:100px;
    i {
        padding-right:20px;
    }
`

function Slide({ movie }) {
    return (
        <SlideStyle backgroundImage={movie.backdrop_path} >
            <div className="overlay">
                <div className="content">
                    <p>Release date : {movie.release_date}</p>
                    <GenreAndRating>
                        <Rating><i class="fas fa-star"></i> {movie.vote_average}</Rating>
                        <ul>
                            {movie.genre_ids.map((id) => (
                                <Genre id={id} />
                            ))}
                        </ul>
                    </GenreAndRating>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <Button color="primary"><i className="fas fa-play"></i> Watch</Button>
                    <Button color="black"><i className="fas fa-plus"></i> Add to List</Button>
                </div>
            </div>
        </SlideStyle>
    )
}

export default Slide
