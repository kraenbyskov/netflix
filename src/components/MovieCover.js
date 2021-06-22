import React from 'react'
import styled from 'styled-components'

const ImageUrl = "https://www.themoviedb.org/t/p/original/"


const Cover = styled.div`
position: relative;
    width:100%;
    height:500px;
`
const Poster = styled.div`
    aspect-ratio:2 / 3;
    background-image:url(${ImageUrl}${(props) => (props.background)});
    background-size:cover;
    background-position:center;
`


function MovieCover({ children, movie }) {
    return (
        <Cover>
            <div style={{ margin: "20px" }}>
                <Poster background={movie.poster_path} />
            </div>
        </Cover>
    )
}

export default MovieCover
