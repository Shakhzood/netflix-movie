import React from 'react';

import './Wrapper.css';

const Wrapper = (props) => {
    const { isModalOpen, setModal, children } = props;

    return (
        <div onClick={() => setModal(!isModalOpen)} className={`${isModalOpen ? 'wrapper' : ''}`}>
            {children}
        </div>
    );
};

export default Wrapper;