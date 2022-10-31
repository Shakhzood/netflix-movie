import React from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import './body.css';

const filterArr = [
  { title: 'all', id: 1 },
  { title: 'documentary', id: 2 },
  { title: 'comedy', id: 3 },
  { title: 'horror', id: 4 },
  { title: 'crime', id: 5 },
];

const Body = () => {
  return (
    <React.Fragment>
      <div className="body-container">
        <div className="filter-category-container">
          <div className="filter-category">
            <ul>
              {filterArr.map((item) => {
                return (
                  <li key={item.id} className="filter-items">
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="select-date-container">
            <span className="sort-by">sort by</span>
            <ul className="filter-items">
              <li value="">release date</li>
            </ul>
            <div>
              <img
                className="btn-pointer red-heart"
                src="./images/selection.png"
                alt="red square"
              />
            </div>
          </div>
        </div>
        {/* Movie conmtainer */}
        <MovieContainer />
      </div>
      <div>{/* something will be here later */}</div>
    </React.Fragment>
  );
};

export default Body;
