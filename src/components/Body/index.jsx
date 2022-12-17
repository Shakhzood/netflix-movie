import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchingMovieByGenre, sortBy } from '../../Redux/Thunk/Thunk';
import Congratulation from '../ModalWindows/Congratulation/Congratulation';
import DeleteMovieModal from '../ModalWindows/DeleteMovieModal/DeleteMovieModal';
import EditMovieModal from '../ModalWindows/EditMovieModal/EditMovieModal';
import { closeModal } from '../ModalWindows/modalFunctions';
import MovieContainer from '../MovieContainer/MovieContainer';
import Wrapper from '../Wrapper/Wrapper';

import './body.css';

const filterArr = [
    { title: 'all', id: 0 },
    { title: 'documentary', id: 1 },
    { title: 'comedy', id: 2 },
    { title: 'horror', id: 3 },
    { title: 'crime', id: 4 },
];

const Body = ({ setMovieOpen }) => {
    const [movieGenreArr, setMoiveListArr] = useState(filterArr);
    // const [genreIdx, setGenreIdx] = useState(0);
    const [releaseDate, setReleaseDate] = useState('release_date');
    const dispatch = useDispatch();
    const { movieListData, isDeleteModalOpen, isEditModalOpen, isCongratulationOpen, genreIdx } = useSelector((state) => state.movieReducer);
    const { data } = movieListData;
    let isDataReady = Object.keys(movieListData).length > 0;

    const findMovieByGenre = (genreId, idx) => {
        dispatch({ type: 'SET_GENRE_IDX', payload: idx });
        const genre = movieGenreArr.find((item) => item.id === genreId);
        if (genre.title === 'all') {
            dispatch(searchingMovieByGenre());
        } else {
            dispatch(searchingMovieByGenre(genre.title));
        }
    };
    const handleChange = (event) => {
        dispatch(sortBy(event.target.value));
    };

    return (
        <React.Fragment>
            {/* Modal window */}
            <Wrapper isModalOpen={isDeleteModalOpen} setModal={() => closeModal('isDeleteModalOpen', dispatch)}>
                <DeleteMovieModal
                    setMoiveListArr={setMoiveListArr}
                />
            </Wrapper>

            <Wrapper isModalOpen={isEditModalOpen} setModal={() => closeModal('isEditModalOpen', dispatch)}>
                <EditMovieModal isEditModalOpen={isEditModalOpen} />
            </Wrapper>

            <Wrapper isModalOpen={isCongratulationOpen} setModal={() => closeModal('isCongratulationOpen', dispatch)}>
                <Congratulation isCongratulationOpen={isCongratulationOpen} />
            </Wrapper>

            <div className="body-container">
                <div className="filter-category-container">
                    <div className="filter-category">
                        <ul>
                            {movieGenreArr.map((item, idx) => {
                                return (
                                    <li onClick={() => findMovieByGenre(item.id, idx)} key={item.id} className={`filter-items ${idx === genreIdx && 'highlight'}`}>
                                        {item.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="select-date-container">
                        <label htmlFor="cars" className='sort-by'>sort by</label>
                        <div>
                            <select onChange={handleChange} className='sort-by sort-by-selection' style={{ color: '#FFF', backgroundColor: '#232323' }}>
                                <option value="release_date">release date</option>
                                <option value="vote_count">vote count</option>
                                <option value="budget">budget</option>
                                <option value="revenue">revenue</option>
                            </select>
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
