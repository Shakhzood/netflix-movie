import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

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

const AddMovieModal = ({ isAddMovieOpen, setModal }) => {
    const dispatch = useDispatch();
    const [isGanreOpen, setGanreOpen] = useState(false);
    const [genres, setGenre] = useState(genreArr);


    const openGenreFunc = () => {
        setGanreOpen(!isGanreOpen);
    };

    const initialValues = {
        title: '',
        releaseDate: '',
        getMovieUrl: '',
        getRating: '',
        getRuntime: 0,
        getOverview: '',
        genres: [...genreArr],
        selectedGenres: [],
    };
    const validationSchema = Yup.object({
        title: Yup.string().max(15, 'max chars should be 15').required('Required'),
        releaseDate: Yup.string().required('Required'),
        getMovieUrl: Yup.string().required('Required'),
        getRating: Yup.string().required('Required'),
        getRuntime: Yup.number().required('Required'),
        getOverview: Yup.string().min(10, 'Should be more than 10 chars').required('Required'),
        selectedGenres: Yup.array().min(1, 'Please choose at least one of them'),
    });
    // console.log(formik);
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${isAddMovieOpen ? 'open-add-movie-modal' : 'close-modal'}`}
        >
            <ModalHeader setModal={setModal}>add movie</ModalHeader>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(data) => {
                const { title, getMovieUrl, getOverview, releaseDate, getRuntime, selectedGenres } = data;
                let newMovieObj = {
                    title: title,
                    poster_path: getMovieUrl,
                    overview: getOverview,
                    release_date: releaseDate,
                    runtime: Number(getRuntime),
                    genres: selectedGenres,
                };
                dispatch(postNewMovie(newMovieObj));
                // console.log(data);
            }}>
                {
                    ({ values, handleChange, handleBlur, handleSubmit, touched, errors, isSubmitting, resetForm }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="make-center">
                                <div className="movie-info-container">
                                    <div>
                                        <Input
                                            stateValue={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='title'
                                            type="text"
                                            label="title"
                                            value="Moana"
                                            className="input-big"
                                            placeholder='Enter movie name'
                                        />
                                        {/* <pre style={{ color: '#FFF' }}>{JSON.stringify(values, null, 2)}</pre> */}
                                        {touched.title && errors.title && <p className='error-msg'>{errors.title}</p>}
                                    </div>
                                    <div className="date-container">
                                        <img
                                            className="date-icon"
                                            src="./images/date-icon.png"
                                            alt="date-icon"
                                        />
                                        <Input
                                            stateValue={values.releaseDate}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='releaseDate'
                                            type="date"
                                            label="RELEASE DATE"
                                            placeholder="Select Date"
                                            className="input-small"
                                        />
                                        {touched.releaseDate && errors.releaseDate && <p className='error-msg'>{errors.releaseDate}</p>}
                                    </div>
                                    <div>
                                        <Input
                                            stateValue={values.getMovieUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='getMovieUrl'
                                            label="movie url"
                                            placeholder="https://"
                                        />
                                        {touched.getMovieUrl && errors.getMovieUrl && <p className='error-msg'>{errors.getMovieUrl}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            stateValue={values.getRating}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='getRating'
                                            type="number"
                                            label="RATING"
                                            placeholder="7.8"
                                            className="input-small"
                                        />
                                        {touched.getRating && errors.getRating && <p className='error-msg'>{errors.getRating}</p>}
                                    </div>

                                    <div>
                                        <p className="label">genre</p>
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className="input-big selection-input"
                                        >
                                            <div onClick={openGenreFunc}>
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
                                                    {
                                                        genres.map((item) => {
                                                            const { id, genre } = item;
                                                            return <p key={id}>
                                                                <Field name='selectedGenres' value={genre} type='checkbox' />
                                                                <span className='genre-name'> {genre}</span>
                                                            </p>;
                                                        })
                                                    }
                                                </div>
                                            )}
                                            {/* <pre style={{ color: '#FFF' }}>{JSON.stringify(values, null, 2)}</pre> */}
                                            {touched.selectedGenres && errors.selectedGenres && <p className='error-msg'>{errors.selectedGenres}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <Input
                                            stateValue={values.getRuntime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='getRuntime'
                                            type="number"
                                            label="RUNTIME"
                                            placeholder="minutes"
                                            className="input-small"
                                        />
                                        {touched.getRuntime && errors.getRuntime && <p className='error-msg'>{errors.getRuntime}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="centering">
                                <div>
                                    {/* textarea */}
                                    <p className="label">OVERVIEW</p>
                                    <textarea
                                        value={values.getOverview}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='getOverview'
                                        className="textarea"
                                        id=""
                                        cols="50"
                                        rows="3"
                                        placeholder="Movie description"
                                    ></textarea>
                                    {touched.getOverview && errors.getOverview && <p className='error-msg'>{errors.getOverview}</p>}
                                </div>
                            </div>

                            <div className="btn-container">
                                {/* two buttons */}
                                <Button onClick={resetForm} type="button" className=''>reset</Button>
                                <Button disabled={isSubmitting} type="submit" className={`submit-btn ${isSubmitting && 'submitting'}`}>
                                    submit
                                </Button>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </div>
    );
};

export default AddMovieModal;
