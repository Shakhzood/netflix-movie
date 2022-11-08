import React, { Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.css';

function App() {

  return (
    <Fragment>
      <div className="app">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>

        <ErrorBoundary>
          <Body />
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
