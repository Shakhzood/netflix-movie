import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalHeader from '../ModalHeader/ModalHeader';
import { deleteSingleMovie } from '../../../Redux/Thunk/Thunk';
import './DeleteMovieModal.css';

const DeleteMovieModal = () => {
    const { deletingMovieId, isDeleteModalOpen } = useSelector((state) => state.movieReducer);
    const dispatch = useDispatch();

    const deleteMovie = (deletingMovieId) => {
        dispatch(deleteSingleMovie(deletingMovieId));
    };

    const setModal = () => {
        dispatch({ type: 'CLOSING_MODAL', payload: 'isDeleteModalOpen' });
    };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${isDeleteModalOpen ? 'delete-movie-container' : 'hide-delete'}`}
        >
            <ModalHeader setModal={setModal}>delete movie</ModalHeader>
            <div>
                <p className="delete-movie-confirm">Are you sure you want to delete this movie?</p>
            </div>
            <div className="confirm-container">
                <button onClick={() => deleteMovie(deletingMovieId)} className="confirm-btn">confirm</button>
            </div>
        </div>
    );
};

export default DeleteMovieModal;
