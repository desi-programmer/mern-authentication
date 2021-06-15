import React from 'react';
import { useState} from 'react';

function Alert({ err , show }) {
    const [showPopup, setShowPopup] = useState(show);

    const toggleShowInfoPopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={toggleShowInfoPopup} aria-label="Close">
                </button>
                {err}
            </div>
        </div>
    );
}

export default Alert;