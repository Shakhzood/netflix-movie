import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalHeader from '../ModalHeader/ModalHeader';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

import './EditMovieModal.css';

const EditMovieModal = ({ isEditModalOpen }) => {
    const { editMovie } = useSelector((state) => state.movieReducer);
    const { title } = editMovie;
    const [isGanreOpen, setGanreOpen] = useState(false);

    const [_title, setTitle] = useState('');
    const [_vote_average, setVote_average] = useState(4.4);
    const [_poster_path, setPoster_path] = useState('');
    const [_release_date, setRelease_date] = useState('');
    const [_overview, setOverview] = useState('');
    const [_genres, setGenres] = useState([]);
    const [_runtime, setRuntime] = useState(0);

    useEffect(() => {
        setTitle(editMovie.title);
        setVote_average(editMovie.vote_average);
        setPoster_path(editMovie.poster_path);
        setRelease_date(editMovie.release_date);
        setOverview(editMovie.overview);
        setGenres(editMovie.genres);
        setRuntime(editMovie.runtime);
    }, []);

    const dispatch = useDispatch();
    // const [selectedMovie, setSelectedMovie] = useState({});
    // let isEditMovieReady = Object.keys(editMovie).length > 0;
    // console.log(editMovie);
    const closeModal = () => {
        dispatch({ type: 'CLOSING_MODAL', payload: 'isEditModalOpen' });
    };
    const editTitle = (e, inputName) => {
        switch (inputName) {
            case 'title':
                // console.log(e.target.value);
                dispatch({ type: 'EDIT_MOVIE_INFO', payload: { name: 'title', userValue: e.target.value } });
                break;
        }
    };


    // need to finish edit modal window 
    // need to add loading.
    // genre ni o'rtasiga bir space berish kerak
    // etc. 
    // need to analise
    //delete reset
    // inline error message while 

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${isEditModalOpen ? 'open-add-movie-modal' : 'close-modal'}`}
        >
            <ModalHeader setModal={closeModal}>EDIT MOVIE</ModalHeader>

            <div>
                <div className="make-center">
                    <div className="movie-info-container">
                        <div>
                            <Input onChange={(e) => editTitle(e, 'title')} stateValue={title} type="text" label="title" value="Moana" className="input-big" />
                        </div>
                        <div className="date-container">
                            <img
                                className="date-icon"
                                src="./images/date-icon.png"
                                alt="date-icon"
                            />
                            <Input
                                onChange={(e) => setRelease_date(e.target.value)}
                                stateValue={_release_date}
                                type="date"
                                label="RELEASE DATE"
                                placeholder="Select Date"
                                className="input-small"
                            />
                        </div>
                        <div>
                            <Input onChange={(e) => setPoster_path(e.target.value)} stateValue={_poster_path} label="movie url" value="https://" />
                        </div>

                        <div>
                            <Input
                                onChange={(e) => setVote_average(e.target.value)}
                                stateValue={_vote_average}
                                type="text"
                                label="RATING"
                                placeholder="7.8"
                                className="input-small"
                            />
                        </div>

                        <div>
                            <p className="label">genre</p>
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="input-big selection-input"
                            >
                                <div onClick={() => setGanreOpen(!isGanreOpen)}>
                                    <p className="select-genre-title">Select Genre</p>
                                    <img
                                        className={`${isGanreOpen ? 'rotate-red-square' : 'red-square'
                                            }`}
                                        src="./images/selection.png"
                                        alt="red-square"
                                    />
                                </div>

                                {isGanreOpen && (
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className="select-genre"
                                    >
                                        {/* {_genres.map((item, idx) => (<p key={idx}>
                                            <input type="checkbox" /> <span>{item}</span>
                                        </p>))} */}
                                        <p>
                                            <input type="checkbox" /> <span>Crime</span>
                                        </p>
                                        <p>
                                            <input type="checkbox" /> <span>Documentary </span>
                                        </p>
                                        <p>
                                            <input type="checkbox" /> <span>Horror</span>
                                        </p>
                                        <p>
                                            <input type="checkbox" /> <span>Comedy</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <Input
                                onChange={(e) => setRuntime(e.target.value)}
                                stateValue={_runtime}
                                type="text"
                                label="RUNTIME"
                                placeholder="minutes"
                                className="input-small"
                            />
                        </div>
                    </div>
                </div>

                <div className="centering">
                    <div>
                        {/* textarea */}
                        <p className="label">OVERVIEW</p>
                        <textarea
                            value={_overview}
                            onChange={(e) => setOverview(e.target.value)}
                            className="textarea"
                            name=""
                            id=""
                            cols="50"
                            rows="3"
                            placeholder="Movie description"
                        ></textarea>
                    </div>
                </div>

                <div className="btn-container">
                    {/* two buttons */}
                    <Button type="button">reset</Button>
                    <Button type="button" className="submit-btn">
                        submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EditMovieModal;
