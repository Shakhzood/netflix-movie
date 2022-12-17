import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchingMovieByTitle } from '../../Redux/Thunk/Thunk';
import AddMovieModal from '../ModalWindows/AddMovieModal/AddMovieModal';
import Wrapper from '../Wrapper/Wrapper';
import './header.css';

const HeaderContainer = styled.header`
    width: 100%;
    height: 500px;
    background-image: url('./images/header-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-bottom: 10px;
`;
const Button = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: right;
    text-transform: uppercase;

    color: #f65261;
    padding: 11px 18px;

    background: rgba(96, 96, 96, 0.68);
    border-radius: 4px;
    border: none;
`;
const HeaderTop = styled.header`
    width: 100%;
    height: 280px;
    padding-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

const Header = () => {
    const { isAddMovieOpen } = useSelector((state) => state.movieReducer);
    const dispatch = useDispatch();
    const [movieTitle, setMovieTitle] = useState('');

    const searchMovieByTitle = () => {
        dispatch(searchingMovieByTitle(movieTitle));
        setMovieTitle('');
        dispatch({ type: 'SET_GENRE_IDX', payload: 0 });
    };
    const searchMovie = () => {
        dispatch({ type: 'OPEN_MODAL', payload: 'isAddMovieOpen' });
    };

    return (
        <Fragment>
            <Wrapper isModalOpen={isAddMovieOpen} setModal={() => dispatch({ type: 'CLOSING_MODAL', payload: 'isAddMovieOpen' })}>
                <AddMovieModal isAddMovieOpen={isAddMovieOpen} setModal={() => dispatch({ type: 'CLOSING_MODAL', payload: 'isAddMovieOpen' })} />
            </Wrapper>

            <HeaderContainer>
                {/* logo button */}
                <HeaderTop>
                    <div className="header-top">
                        <img
                            className="btn-pointer"
                            width={'151px'}
                            src="./images/netflixroulette.png"
                            alt="logo"
                        />
                        <Button
                            onClick={searchMovie}
                            className="btn-pointer"
                        >
                            + add movie
                        </Button>
                    </div>
                    <div className="search-movie-container">
                        <h1 className="search-title">find your movie</h1>

                        <div className="userInput">
                            <input
                                onChange={(e) => setMovieTitle(e.target.value)}
                                value={movieTitle}
                                className="input-value"
                                type="text"
                                placeholder="What do you want to watch?"
                            />
                            <button onClick={searchMovieByTitle} className="search-btn btn-pointer">search</button>
                        </div>
                    </div>
                </HeaderTop>

                <div></div>
            </HeaderContainer>
        </Fragment>
    );
};

export default Header;
