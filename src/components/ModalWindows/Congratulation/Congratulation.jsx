import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../modalFunctions';


import './Congratulation.css';

const Congratulation = ({ isCongratulationOpen }) => {
    const dispatch = useDispatch();

    return (
        <div className={`${isCongratulationOpen ? 'congratulations-modal' : 'close-modal'}`}>
            <div className='close-btn-container'>
                <img className='close-btn' onClick={() => closeModal('isCongratulationOpen', dispatch)} src="./images/add-movie-close-icon.png" alt="close movie" />
            </div>
            <div className='check-icon-box'>
                <img src="./images/check-icon.png" alt="check-mark" />
            </div>

            <h2 className='text'>
                congratulations !
            </h2>  <br />
            <p className='text text2'>The movie has been added to <br />
                database successfully
            </p>
        </div>
    );
};

export default Congratulation;