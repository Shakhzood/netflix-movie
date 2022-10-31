import React from 'react';
import PropTypes from 'prop-types';
import './MovieItems.css';

const MovieItems = ({ movieId, movieTitle, year, type, imgUrl }) => {
  return (
    <React.Fragment>
      <div className="single-movie" key={movieId}>
        <img className="movie-image" src={imgUrl} alt="movieImage" />

        <div className="black-circle">
          <span className="buttel-point box1"></span>
          <span className="buttel-point box2"></span>
          <span className="buttel-point box3"></span>
        </div>

        <div className="movie-title">
          <p>{movieTitle}</p>
          <span className="movie-birth-year year-border">{year}</span>
        </div>
        <span className="movie-category">{type}</span>
      </div>
    </React.Fragment>
  );
};

MovieItems.defaultProps = {
  movieId: 0,
  movieTitle: '',
  year: 2000,
  type: '',
  imgUrl: '',
};

MovieItems.propTypes = {
  movieId: PropTypes.number,
  movieTitle: PropTypes.string,
  year: PropTypes.number,
  type: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default MovieItems;
