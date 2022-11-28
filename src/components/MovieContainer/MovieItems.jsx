import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieItems.css';

const MovieItems = ({
    setDeleteModalOpen,
    id: movieId,
    title,
    year,
    genres,
    poster_path,
    setMovieOpen,
}) => {
    const [isOpen, setOpen] = useState(false);
    const [editMovie, setEditMovie] = useState({});
    const { movieListData } = useSelector((state) => state.movieReducer);
    const dispatch = useDispatch();

    const openEditWindow = (e) => {
        e.stopPropagation();
        setOpen(!isOpen);
    };
    const openDeleteWindow = (movieId) => {
        dispatch({type: 'OPEN_MODAL', payload: 'isDeleteModalOpen' });
        setOpen(!isOpen);
        dispatch({type:'UPDATE_DELETING_MOVIE_ID', payload: movieId});
    };

    const editMovieFunc = (movieId) => {
        dispatch({type: 'OPEN_MODAL', payload: 'isEditModalOpen'});
        let selectedElem = movieListData.find((item) => item.id === movieId);
        setEditMovie(selectedElem);
    };
    // const { title, movieUrl, runTime, releaseDate, genre, rating, overview } = editMovie;
    function selectMovie(movieId) {
        dispatch({ type: 'UPDATE_MOVIE_INFO', payload: movieId });
        setMovieOpen(true);
        window.scrollTo(0, 0);
    }

    return (
        <React.Fragment>
            <div className="single-movie" key={movieId} onClick={() => selectMovie(movieId)}>
                <img
                    className="movie-image"
                    src={`${title === 'Zootopia' ? './images/defaultImage.jpg' : poster_path}`}
                    alt="movieImage"
                />

                {/* 3 dots with back circle */}
                {!isOpen && (
                    <div className="black-circle" onClick={openEditWindow}>
                        <span className="buttel-point box1"></span>
                        <span className="buttel-point box2"></span>
                        <span className="buttel-point box3"></span>
                    </div>
                )}

                {/* Open edit modal window */}
                {isOpen && (
                    <div onClick={(e) => e.stopPropagation()} className="edit-modal-window">
                        <div className="close-btn-container" onClick={() => setOpen(!isOpen)}>
                            <img src="./images/close-icon.png" alt="" />
                        </div>
                        <div onClick={() => editMovieFunc(movieId)}>edit</div>
                        <div onClick={() => openDeleteWindow(movieId)}>delete</div>
                    </div>
                )}

                <div className="movie-title">
                    <p>{title}</p>
                    <span className="movie-birth-year year-border">{year}</span>
                </div>
                <div>
                    {genres.map((genre, i) => {
                        return (
                            <span key={i} className="movie-category">
                                {genre}
                            </span>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};

MovieItems.defaultProps = {
    movieId: 0,
    movieTitle: '',
    year: 2000,
    type: '',
    imgUrl: '',
};

MovieItems.propTypes = {
    movieId: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number,
    type: PropTypes.string,
    poster_path: PropTypes.string,
    setDeleteModalOpen: PropTypes.func,
    setEditModalOpen: PropTypes.func,
    setMovieOpen: PropTypes.func,
    id: PropTypes.number,
    genres: PropTypes.array,
};

export default MovieItems;
