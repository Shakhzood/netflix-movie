import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
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
    const [isAddMovieOpen, setAddMovie] = useState(false);

    return (
        <Fragment>
            <Wrapper isModalOpen={isAddMovieOpen} setModal={setAddMovie}>
                <AddMovieModal isAddMovieOpen={isAddMovieOpen} setModal={setAddMovie} />
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
                            onClick={() => setAddMovie(!isAddMovieOpen)}
                            className="btn-pointer"
                        >
                            + add movie
                        </Button>
                    </div>
                    <div className="search-movie-container">
                        <h1 className="search-title">find your movie</h1>

                        <div className="userInput">
                            <input
                                className="input-value"
                                type="text"
                                placeholder="What do you want to watch?"
                            />
                            <button className="search-btn btn-pointer">search</button>
                        </div>
                    </div>
                </HeaderTop>

                <div></div>
            </HeaderContainer>
        </Fragment>
    );
};

export default Header;
