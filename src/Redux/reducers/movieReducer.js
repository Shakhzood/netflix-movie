const initialState = {
  movieListData: {},
  movieId: 0,
  deletingMovieId: 0,

  //modal window state
  isDeleteModalOpen: false,
  isEditModalOpen: false,
  isAddMovieOpen: false,
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
const updateDeletingMovieId = (state, deletingMovieId) => {
  return {
    ...state,
    deletingMovieId,
  };
};
const closeModal = (state, modalName) => {
  return {
    ...state,
    [modalName]: false,
  };
};
const openModal = (state, modalName) => {
  return {
    ...state,
    [modalName]: true,
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
    case 'UPDATE_DELETING_MOVIE_ID':
      return updateDeletingMovieId(state, action.payload);
    case 'CLOSING_MODAL':
      return closeModal(state, action.payload);
    case 'OPEN_MODAL':
      return openModal(state, action.payload);
    default:
      return state;
  }
};

export default movieReducer;
