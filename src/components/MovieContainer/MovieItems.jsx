import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieItems.css';

const MovieItems = ({
    setDeleteModalOpen,
    setEditModalOpen,
    id: movieId,
    movieTitle,
    year,
    type,
    url: imgUrl,
}) => {
    const [isOpen, setOpen] = useState(false);
    const [editMovie, setEditMovie] = useState({});
    const { movieList } = useSelector((state) => state.movieReducer);

    const openEditWindow = () => {
        setOpen(!isOpen);
    };
    const openDeleteWindow = () => {
        setDeleteModalOpen((isEditModalOpen) => !isEditModalOpen);
        setOpen(!isOpen);
    };

    const test = (movieId) => {
        setEditModalOpen((isEditModalOpen) => !isEditModalOpen);
        let selectedElem = movieList.find((item) => item.id === movieId);
        setEditMovie(selectedElem);
        console.log(selectedElem);
        console.log(movieList);
    };
    // const { title, movieUrl, runTime, releaseDate, genre, rating, overview } = editMovie;

    return (
        <React.Fragment>
            <div className="single-movie" key={movieId}>
                <img className="movie-image" src={imgUrl} alt="movieImage" />

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
                    <div className="edit-modal-window">
                        <div className="close-btn-container" onClick={() => setOpen(!isOpen)}>
                            <img src="./images/close-icon.png" alt="" />
                        </div>
                        <div onClick={() => test(movieId)}>edit</div>
                        <div onClick={openDeleteWindow}>delete</div>
                    </div>
                )}

                <div className="movie-title">
                    <p>{movieTitle}</p>
                    <span className="movie-birth-year year-border">{year}</span>
                </div>
                <span className="movie-category">{type}</span>
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
    movieTitle: PropTypes.string,
    year: PropTypes.number,
    type: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default MovieItems;
