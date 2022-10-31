import React from 'react';
import './MovieContainer.css';
import MovieItems from './MovieItems';

let movieList = [
  {
    id: 1,
    title: 'Pulp Fiction',
    year: 2004,
    type: 'Action & Adventure',
    url: './images/fiction.png',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    year: 2003,
    type: 'Drama, Biography, Music',
    url: './images/bohomian.png',
  },
  {
    id: 3,
    title: 'Kill Bill: Vol 2',
    year: 1994,
    type: 'Oscar winning Movie',
    url: './images/kill.png',
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    year: 2004,
    type: 'Action & Adventure',
    url: './images/avangers.png',
  },
  {
    id: 5,
    title: 'Inception',
    year: 2003,
    type: 'Action & Adventure',
    url: './images/inception.png',
  },
  {
    id: 6,
    title: 'Reservoir dogs',
    year: 1994,
    type: 'Oscar winning Movie',
    url: './images/dogs.png',
  },
];

const MovieContainer = () => {
  return (
    <React.Fragment>
      <div className="movie-container">
        {movieList.map((movie) => (
          <MovieItems
            key={movie.id}
            movieId={movie.id}
            movieTitle={movie.title}
            year={movie.year}
            type={movie.type}
            imgUrl={movie.url}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default MovieContainer;
