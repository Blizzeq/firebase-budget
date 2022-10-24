import React from 'react';
import {MDBSpinner} from "mdb-react-ui-kit";

function LoadingScreen(props) {
    return (
        <div className={'LoadingScreen'}>
            <MDBSpinner color={'secondary'} className='me-2' style={{ width: '6rem', height: '6rem' }}>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    );
}

export default LoadingScreen;
