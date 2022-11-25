import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const { movieListData } = useSelector((state) => state.movieReducer);
    const { data } = movieListData;
    let isDataReady = Object.keys(movieListData).length > 0;

    return (
        <React.Fragment>
            {/* Modal window */}
            <Wrapper isModalOpen={isDeleteModalOpen} setModal={setDeleteModalOpen}>
                <DeleteMovieModal
                    isEditModalOpen={isDeleteModalOpen}
                    setEditModal={setDeleteModalOpen}
                    setMoiveListArr={setMoiveListArr}
                />
            </Wrapper>

            <Wrapper isModalOpen={isEditModalOpen} setModal={setEditModalOpen}>
                <EditMovieModal isEditModalOpen={isEditModalOpen} setEditModal={setEditModalOpen} />
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
                    setDeleteModalOpen={setDeleteModalOpen}
                    setEditModalOpen={setEditModalOpen}
                />
            </div>
            <div>{/* something will be here later */}</div>
        </React.Fragment>
    );
};

export default Body;
