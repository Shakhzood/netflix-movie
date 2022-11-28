import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';
import { postNewMovie } from '../../../Redux/Thunk/Thunk';

import './AddMovieModal.css';

let genreArr = [
    { id: 1, isChecked: false, genre: 'crime' },
    { id: 2, isChecked: false, genre: 'documentary' },
    { id: 3, isChecked: false, genre: 'horror' },
    { id: 4, isChecked: false, genre: 'comedy' },
];

const AddMovieModal = ({ isAddMovieOpen, setModal, children }) => {
    const dispatch = useDispatch();
    const [isGanreOpen, setGanreOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [getMovieUrl, setMovieUrl] = useState('');
    const [getRating, setRating] = useState('');
    const [getRuntime, setRuntime] = useState(0);
    const [getOverview, setOverview] = useState('');

    // genre
    const [genres, setGenre] = useState(genreArr);
    let selectedGenresArr = genres
        .filter((item) => item.isChecked === true)
        .map((item) => item.genre);

    let newMovieObj = {
        title: title,
        poster_path: getMovieUrl,
        overview: getOverview,
        release_date: releaseDate,
        runtime: Number(getRuntime),
        genres: selectedGenresArr,
    };

    const getMovieTitle = (e) => {
        setTitle(e.target.value);
    };
    const getDate = (e) => {
        setReleaseDate(e.target.value);
    };
    const getMovieUrlFunc = (e) => {
        setMovieUrl(e.target.value);
    };
    const getMovieRating = (e) => {
        setRating(e.target.value);
    };
    const getMovieRuntime = (e) => {
        setRuntime(e.target.value);
    };
    const getOverviewFunc = (e) => {
        setOverview(e.target.value);
    };
    const getGenre = (e, genreId) => {
        let newGenre = genres.map((item) => {
            if (item.id === genreId) {
                return { ...item, isChecked: e.target.checked };
            } else {
                return item;
            }
        });
        setGenre(newGenre);
    };
    const submitNewMovieInfo = () => {
        dispatch(postNewMovie(newMovieObj));
    };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${isAddMovieOpen ? 'open-add-movie-modal' : 'close-modal'}`}
        >
            <ModalHeader setModal={setModal}>add movie</ModalHeader>

            <div>
                <div className="make-center">
                    <div className="movie-info-container">
                        <div>
                            <Input
                                stateValue={title}
                                onChange={getMovieTitle}
                                type="text"
                                label="title"
                                value="Moana"
                                className="input-big"
                            />
                        </div>
                        <div className="date-container">
                            <img
                                className="date-icon"
                                src="./images/date-icon.png"
                                alt="date-icon"
                            />
                            <Input
                                stateValue={releaseDate}
                                onChange={getDate}
                                type="date"
                                label="RELEASE DATE"
                                placeholder="Select Date"
                                className="input-small"
                            />
                        </div>
                        <div>
                            <Input
                                stateValue={getMovieUrl}
                                onChange={getMovieUrlFunc}
                                label="movie url"
                                placeholder="https://"
                            />
                        </div>

                        <div>
                            <Input
                                stateValue={getRating}
                                onChange={getMovieRating}
                                type="number"
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
                                        className={`${
                                            isGanreOpen ? 'rotate-red-square' : 'red-square'
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
                                        {genres.map((item) => {
                                            return (
                                                <p key={item.id}>
                                                    <input
                                                        onChange={(e) => getGenre(e, item.id)}
                                                        type="checkbox"
                                                    />
                                                    <span>{item.genre}</span>
                                                </p>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <Input
                                stateValue={getRuntime}
                                onChange={getMovieRuntime}
                                type="number"
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
                            value={getOverview}
                            onChange={getOverviewFunc}
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
                    <Button onClick={submitNewMovieInfo} type="button" className="submit-btn">
                        submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddMovieModal;
