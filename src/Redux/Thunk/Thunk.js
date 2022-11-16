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
  //   console.log(data);
};
