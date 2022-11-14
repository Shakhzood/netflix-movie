import React from 'react';
import { useSelector } from 'react-redux';

import MovieItems from './MovieItems';

import './MovieContainer.css';

const MovieContainer = ({ setDeleteModalOpen, setEditModalOpen, setMovieOpen }) => {
    const { movieList } = useSelector((state) => state.movieReducer);

    return (
        <React.Fragment>
            <div className="movie-container">
                {movieList.map((movie) => (
                    <MovieItems
                        setMovieOpen={setMovieOpen}
                        setDeleteModalOpen={setDeleteModalOpen}
                        setEditModalOpen={setEditModalOpen}
                        key={movie.id}
                        {...movie}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default MovieContainer;
