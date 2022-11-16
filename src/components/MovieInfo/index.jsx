import React from 'react';
import { useSelector } from 'react-redux';

import './MovieInfo.css';

const MovieInfo = ({ setMovieOpen }) => {
    const { movieList, movieId } = useSelector((state) => state.movieReducer);
    const currentMovie = movieList.find((item) => item.id === movieId);
    return (
        <div className="movie-info-box">
            <div className="logo-container">
                <img
                    className="btn-pointer"
                    width={'151px'}
                    src="./images/netflixroulette.png"
                    alt="logo"
                />
                <img
                    onClick={() => setMovieOpen((isMovieOpen) => !isMovieOpen)}
                    className="btn-pointer"
                    width={'28px'}
                    src="./images/search-button.png"
                    alt="logo"
                />
            </div>
            <div className="movie-info">
                <div className="movie-image-box">
                    <img src={currentMovie && currentMovie.url} alt="movieImage" />
                </div>
                <div className="selected-movie-info-box">
                    <h2>{currentMovie && currentMovie.title}</h2>
                    <span>{currentMovie && currentMovie.rating}</span>
                    <span>{currentMovie && currentMovie.type}</span>
                    <span>{currentMovie && currentMovie.year}</span>
                    <span>{currentMovie && currentMovie.runTime}</span>
                    <span>{currentMovie && currentMovie.overview}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
