import React from 'react';
import { useSelector } from 'react-redux';

import './MovieInfo.css';

const MovieInfo = ({ setMovieOpen }) => {
    const { movieListData, movieId, selectedMovie } = useSelector((state) => state.movieReducer);
    const { data } = movieListData;
    const currentMovie = data.find((item) => item.id == movieId);

    let isMovieAvailable = movieListData.data !== undefined && movieListData.data.length > 0;
    let currentMoiveRunTime = selectedMovie.runtime;
    let hours = currentMoiveRunTime / 60;
    let rhours = Math.floor(hours);
    let minutes = Math.floor((hours - rhours) * 60);
    let fullRunTime = `${rhours}h ${minutes}min`;

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
                    onClick={() => setMovieOpen(false)}
                    className="btn-pointer"
                    width={'28px'}
                    src="./images/search-button.png"
                    alt="logo"
                />
            </div>
            <div className="movie-info">
                <div className="movie-image-box">
                    <img
                        width={280}
                        src={
                            isMovieAvailable && selectedMovie.title === 'Zootopia'
                                ? '/images/defaultImage.jpg'
                                : selectedMovie.poster_path
                        }
                        alt="movieImage"
                    />
                </div>
                <div className="selected-movie-info-box">
                    <p className="moive-title">
                        {isMovieAvailable && selectedMovie.title}
                        <span className="movie-rating">
                            {isMovieAvailable && selectedMovie.vote_average}
                        </span>{' '}
                    </p>
                    <span className="movie-type">
                        {isMovieAvailable &&
                            selectedMovie.genres.map((type, idx) => <span key={idx}>{type}, </span>)}
                    </span>{' '}
                    <br />
                    <br />
                    <span className="release_date">
                        {isMovieAvailable && selectedMovie.release_date}
                    </span>
                    <span className="runtime">{isMovieAvailable && fullRunTime}</span> <br /> <br />
                    <span className="overview">{isMovieAvailable && selectedMovie.overview}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
