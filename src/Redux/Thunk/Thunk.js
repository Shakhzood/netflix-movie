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
  console.log(readyNewMovie);
  if (response.ok) {
    dispatch({ type: 'CLOSING_MODAL', payload: 'isAddMovieOpen' });
    dispatch({ type: 'OPEN_MODAL', payload: 'isCongratulationOpen' });
  }
};

//deleting single movie
export const deleteSingleMovie = (deletingMovieId) => async (dispatch) => {
  const response = await fetch(`${mainUrl}/movies/${deletingMovieId.toString()}`, {
    method: 'DELETE',
    headers: {
      accept: ' */*',
    },
  });
  if (response.ok) {
    dispatch(fetchMovies());
    dispatch({ type: 'CLOSING_MODAL', payload: 'isDeleteModalOpen' });
  }
};

export const searchingMovieByTitle = (movieTitle = '') => async (dispatch) => {
  try {
    const response = await fetch(`${mainUrl}/movies?search=${movieTitle}&searchBy=title`, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'SAVE_MOVIES_DATA', payload: data });
    }
  } catch (error) {
    console.log('SEARCHING_MOVIE_BY_TITLE ' + error);
  }
};

export const searchingMovieByGenre = (GenreName = '') => async (dispatch) => {
  try {
    const response = await fetch(`${mainUrl}/movies?search=${GenreName}&searchBy=genres`, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'SAVE_MOVIES_DATA', payload: data });
    }
  } catch (error) {
    console.log('SEARCHING_MOVIE_BY_GENRE ' + error);
  }
};

export const selectSingleMovie = (selectMovieId = '') => async (dispatch) => {
  try {
    const response = await fetch(`${mainUrl}/movies/${selectMovieId}`, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'UPDATE_MOVIE_INFO', payload: data });
    }
  } catch (error) {
    console.log('SELECT_MOVIE ' + error);
  }
};

export const editSingleMovie = (editingMovie = {}) => async (dispatch) => {
  try {
    const response = await fetch(`${mainUrl}/movies`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingMovie),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'EDIT_MOVIE', payload: data });
    }
  } catch (error) {
    console.log('EDIT_SINGLE_MOVIE ' + error);
  }
};

export const sortBy = (release_date = 'release_date') => async (dispatch) => {
  try {
    const response = await fetch(`${mainUrl}/movies?sortBy=${release_date}&sortOrder=asc&limit=100`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'SAVE_MOVIES_DATA', payload: data });
    }
  } catch (error) {
    console.log('SORT_BY_ERROR ' + error);
  }
};