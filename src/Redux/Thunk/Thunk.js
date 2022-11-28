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
  if (readyNewMovie.ok) {
    // dispatch({ type: 'ADD_NEW_MOVIE', payload: readyNewMovie });
    dispatch({ type: 'CLOSING_MODAL', payload: 'isAddMovieOpen' });
  }
};

//deleting single movie
export const deleteSingleMovie = (deletingMovieId) => async (dispatch) => {
  const response = await fetch(`${mainUrl}/movies/${deletingMovieId.toString()}`, {
    method: 'DELETE',
    headers: {
      accept: ' */*',
    },
    // body: JSON.stringify(newMovieObj),
  });
  //   const readyNewMovie = await response.json();
  //   dispatch({ type: 'ADD_NEW_MOVIE', payload: readyNewMovie });
  if (response.ok) {
    dispatch(fetchMovies());
    dispatch({ type: 'CLOSING_MODAL', payload: 'isDeleteModalOpen' });
  }
  //   console.log(response);
};
