let movieListArr = [
    {
        id: 1,
        title: 'Pulp Fiction',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        year: 2004,
        releaseDate: '11/14/2016',
        rating: '7.6',
        runTime: '1h 47min',
        type: 'Action & Adventure',
        url: './images/fiction.png',
    },
    {
        id: 2,
        title: 'Bohemian Rhapsody',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        releaseDate: '11/14/2016',
        rating: '7.6',
        runTime: '1h 47min',
        year: 2003,
        type: 'Drama, Biography, Music',
        url: './images/bohomian.png',
    },
    {
        id: 3,
        title: 'Kill Bill: Vol 2',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        releaseDate: '11/14/2016',
        rating: '7.6',
        runTime: '1h 47min',
        year: 1994,
        type: 'Oscar winning Movie',
        url: './images/kill.png',
    },
    {
        id: 4,
        title: 'Avengers: War of Infinity',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        releaseDate: '11/14/2016',
        rating: '7.6',
        runTime: '1h 47min',
        year: 2004,
        type: 'Action & Adventure',
        url: './images/avangers.png',
    },
    {
        id: 5,
        title: 'Inception',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        releaseDate: '11/14/2016',
        rating: '7.6',
        runTime: '1h 47min',
        year: 2003,
        type: 'Action & Adventure',
        url: './images/inception.png',
    },
    {
        id: 6,
        title: 'Reservoir dogs',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        releaseDate: '11/14/2016',
        rating: '7.6',
        runTime: '1h 47min',
        year: 1994,
        type: 'Oscar winning Movie',
        url: './images/dogs.png',
    },
];

const initialState = {
    movieList: [...movieListArr],
    movieId: 0,
};

const selectMovieInfo = (state, movieId) => {
    return { ...state, movieId };
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MOVIE_INFO':
            return selectMovieInfo(state, action.payload);
        default:
            return state;
    }
};

export default movieReducer;
