import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.css';
// import MovieInfo from './components/MovieInfo';
import MovieInfo from './components/MovieInfo';

function App() {
    const [isMovieOpen, setMovieOpen] = useState(false);

    return (
        <Fragment>
            <div className="app">
                <ErrorBoundary>{isMovieOpen ? <MovieInfo /> : <Header />}</ErrorBoundary>

                <ErrorBoundary>
                    <Body setMovieOpen={setMovieOpen} />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>
            </div>
            <div></div>
        </Fragment>
    );
}

export default App;
