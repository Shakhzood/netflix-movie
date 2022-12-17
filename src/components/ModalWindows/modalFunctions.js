
export const openModal = (modalName, dispatch) => {
    dispatch({ type: 'OPEN_MODAL', payload: modalName });
};


export const closeModal = (modalName, dispatch) => {
    dispatch({ type: 'CLOSING_MODAL', payload: modalName });
}; 