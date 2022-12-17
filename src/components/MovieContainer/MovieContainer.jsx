import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItems from './MovieItems';

import { fetchMovies } from '../../Redux/Thunk/Thunk';
import './MovieContainer.css';

const MovieContainer = ({ setMovieOpen }) => {
    const { movieListData } = useSelector((state) => state.movieReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    let isMovieAvailable = movieListData.data !== undefined && movieListData.data.length > 0;

    return (
        <React.Fragment>
            <div className="movie-container">

                {isMovieAvailable &&
                    movieListData.data.map((movie) => (
                        <MovieItems
                            setMovieOpen={setMovieOpen}
                            key={movie.id}
                            {...movie}
                        />
                    ))}

            </div>
        </React.Fragment>
    );
};

MovieContainer.propTypes = {
    setDeleteModalOpen: PropTypes.func,
    setEditModalOpen: PropTypes.func,
    setMovieOpen: PropTypes.func,
};

export default MovieContainer;
