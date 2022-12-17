import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.css';
// import MovieInfo from './components/MovieInfo';
import MovieInfo from './components/MovieInfo';

function App() {
  const [isMovieOpen, setMovieOpen] = useState(false);
  const { selectedMovie } = useSelector((state) => state.movieReducer);

  const isSingleMovieReady = isMovieOpen && Object.keys(selectedMovie).length > 0;
  // console.log(isSingleMovieReady);
  return (
    <Fragment>
      <div className="app">
        <ErrorBoundary>
          {isSingleMovieReady ? <MovieInfo setMovieOpen={setMovieOpen} /> : <Header />}
        </ErrorBoundary>

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
