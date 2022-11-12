let movieListArr = [
    {
        id: 1,
        title: 'Pulp Fiction',
        movieUrl: 'https://www.moana.com',
        genre: ['crime'],
        overview: 'this is good movie ever you have seen it in your life',
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
        overview: 'this is good movie ever you have seen it in your life',
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
        overview: 'this is good movie ever you have seen it in your life',
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
        overview: 'this is good movie ever you have seen it in your life',
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
        overview: 'this is good movie ever you have seen it in your life',
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
        overview: 'this is good movie ever you have seen it in your life',
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

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return state;
    case 'TOGGLE_TODO':
        return state;
    default:
        return state;
    }
};

export default movieReducer;
