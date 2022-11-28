import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DeleteMovieModal from '../ModalWindows/DeleteMovieModal/DeleteMovieModal';
import EditMovieModal from '../ModalWindows/EditMovieModal/EditMovieModal';
import MovieContainer from '../MovieContainer/MovieContainer';
import Wrapper from '../Wrapper/Wrapper';
import './body.css';

const filterArr = [
    { title: 'all', id: 1 },
    { title: 'documentary', id: 2 },
    { title: 'comedy', id: 3 },
    { title: 'horror', id: 4 },
    { title: 'crime', id: 5 },
];

const Body = ({ setMovieOpen }) => {
    const [movieListArr, setMoiveListArr] = useState(filterArr);
    const dispatch = useDispatch();
    const { movieListData, isDeleteModalOpen, isEditModalOpen } = useSelector((state) => state.movieReducer);
    const { data } = movieListData;
    let isDataReady = Object.keys(movieListData).length > 0;

    const openModal = (modalName) => {
        dispatch({type: 'OPEN_MODAL', payload: modalName });
    };
    const closeModal = (modalName) => {
        dispatch({type: 'CLOSING_MODAL', payload: modalName });
    };

    return (
        <React.Fragment>
            {/* Modal window */}
            <Wrapper isModalOpen={isDeleteModalOpen} setModal={() => closeModal('isDeleteModalOpen')}>
                <DeleteMovieModal
                    setMoiveListArr={setMoiveListArr}
                />
            </Wrapper>

            <Wrapper isModalOpen={isEditModalOpen} setModal={() => closeModal('isEditModalOpen')}>
                <EditMovieModal isEditModalOpen={isEditModalOpen} />
            </Wrapper>

            <div className="body-container">
                <div className="filter-category-container">
                    <div className="filter-category">
                        <ul>
                            {movieListArr.map((item) => {
                                return (
                                    <li key={item.id} className="filter-items">
                                        {item.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="select-date-container">
                        <span className="sort-by">sort by</span>
                        <ul className="filter-items">
                            <li value="">release date</li>
                        </ul>
                        <div>
                            <img
                                className="btn-pointer red-heart"
                                src="./images/selection.png"
                                alt="red square"
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-category-container number-of-movies">
                    <span>{`${isDataReady ? data.length : '0'}`} found movies</span>
                </div>
                {/* Movie conmtainer */}
                <MovieContainer
                    setMovieOpen={setMovieOpen}
                />
            </div>
            <div>{/* something will be here later */}</div>
        </React.Fragment>
    );
};

export default Body;
