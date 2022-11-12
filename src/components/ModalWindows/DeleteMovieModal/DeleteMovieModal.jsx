import React from 'react';
import ModalHeader from '../ModalHeader/ModalHeader';
import './DeleteMovieModal.css';

const DeleteMovieModal = ({ isEditModalOpen, setEditModal }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${isEditModalOpen ? 'delete-movie-container' : 'hide-delete'}`}
        >
            <ModalHeader setModal={setEditModal}>delete movie</ModalHeader>
            <div>
                <p className="delete-movie-confirm">Are you sure you want to delete this movie?</p>
            </div>
            <div className="confirm-container">
                <button className="confirm-btn">confirm</button>
            </div>
        </div>
    );
};

export default DeleteMovieModal;
