const initialState = {
    movieListData: {},
    movieId: 0,
};

const selectMovieInfo = (state, movieId) => {
    return { ...state, movieId };
};
const saveMoviesData = (state, movieListData) => {
    return {
        ...state,
        movieListData,
    };
};
const addNewMovie = (state, readyNewMovie) => {
    return {
        ...state,
        movieListData: {
            ...state.movieListData,
            data: [...state.movieListData.data, readyNewMovie],
        },
    };
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MOVIE_INFO':
            return selectMovieInfo(state, action.payload);
        case 'SAVE_MOVIES_DATA':
            return saveMoviesData(state, action.payload);
        case 'ADD_NEW_MOVIE':
            return addNewMovie(state, action.payload);
        default:
            return state;
    }
};

export default movieReducer;
