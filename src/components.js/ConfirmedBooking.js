import React from 'react';

const ConfirmedBooking = (props) => {
    return (
        <div className='confirm-modal'>
            <div className='confirmmodal-content'>
            <div
            aria-label="On click"
             onClick={props.confirmButton} className="close-icon-container">
                <div className="close-icon">X</div>
            </div>
                <div>
                    <p>We got your reservation request</p>
                </div>
            </div>
        </div>
     
    );
};

export default ConfirmedBooking;