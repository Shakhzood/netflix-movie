import React, { useState } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';
import './AddMovieModal.css';

const AddMovieModal = ({ isAddMovieOpen, setModal, children }) => {
  const [isGanreOpen, setGanreOpen] = useState(false);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${isAddMovieOpen ? 'open-add-movie-modal' : 'close-modal'}`}
    >
      <ModalHeader setModal={setModal}>add movie</ModalHeader>

      <div>
        <div className="make-center">
          <div className="movie-info-container">
            <div>
              <Input type="text" label="title" value="Moana" className="input-big" />
            </div>
            <div className='date-container'>
              <img className="date-icon" src="./images/date-icon.png" alt="date-icon" />
              <Input
                type="date"
                label="RELEASE DATE"
                placeholder="Select Date"
                className="input-small"
              />
            </div>
            <div>
              <Input label="movie url" value="https://" />
            </div>

            <div>
              <Input type="text" label="RATING" placeholder="7.8" className="input-small" />
            </div>

            <div>
              <p className="label">genre</p>
              <div onClick={(e) => e.stopPropagation()} className="input-big selection-input">
                <div onClick={() => setGanreOpen(!isGanreOpen)}>
                  <p className="select-genre-title">Select Genre</p>
                  <img
                    className={`${isGanreOpen ? 'rotate-red-square' : 'red-square'}`}
                    src="./images/selection.png"
                    alt="red-square"
                  />
                </div>

                {isGanreOpen && (
                  <div onClick={(e) => e.stopPropagation()} className="select-genre">
                    <p>
                      <input type="checkbox" /> <span>Crime</span>
                    </p>
                    <p>
                      <input type="checkbox" /> <span>Documentary </span>
                    </p>
                    <p>
                      <input type="checkbox" /> <span>Horror</span>
                    </p>
                    <p>
                      <input type="checkbox" /> <span>Comedy</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Input type="text" label="RUNTIME" placeholder="minutes" className="input-small" />
            </div>
          </div>
        </div>

        <div className="centering">
          <div>
            {/* textarea */}
            <p className="label">OVERVIEW</p>
            <textarea
              className="textarea"
              name=""
              id=""
              cols="50"
              rows="3"
              placeholder="Movie description"
            ></textarea>
          </div>
        </div>

        <div className="btn-container">
          {/* two buttons */}
          <Button type="button">reset</Button>
          <Button type="button" className="submit-btn">
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddMovieModal;
