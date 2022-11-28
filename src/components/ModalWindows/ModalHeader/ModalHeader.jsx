import React from 'react';
import './ModalHeader.css';

const ModalHeader = ({ setModal, children }) => {
    return (
        <React.Fragment>
            <div className="close-btn-box">
                <img
                    onClick={setModal}
                    width={'23.37px'}
                    src="./images/add-movie-close-icon.png"
                    alt="close-btn"
                />
            </div>
            <div>
                <p className="delete-movie-title">{children}</p>
            </div>
        </React.Fragment>
    );
};

export default ModalHeader;
