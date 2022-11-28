import mainUrl from '../../api';

export const fetchMovies = () => async (dispatch) => {
    const response = await fetch(`${mainUrl}/movies`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    });
    const data = await response.json();
    dispatch({ type: 'SAVE_MOVIES_DATA', payload: data });
};

// post new movie
export const postNewMovie = (newMovieObj) => async (dispatch) => {
    const response = await fetch(`${mainUrl}/movies`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovieObj),
    });
    const readyNewMovie = await response.json();
    dispatch({ type: 'ADD_NEW_MOVIE', payload: readyNewMovie });
    console.log(readyNewMovie);
};
