import React from 'react'
import error from '../static/error.svg';
import { Link } from 'react-router-dom';

export default function NotFound() {

    const fullHeight = {
        'height' : '95vh',
        'display' : 'flex',
        'flex-direction' : 'column',
        'justify-content' : 'center',
        'align-items' : 'center' 

    };

    return (
        <div style={fullHeight}>
            <h3 className='p-4 text-center'> Oops ! Can't Find what you are Looking For </h3>
            <img alt="404 Image" className="img-fluid" width="500px" src={error} />
            <Link to='/' className='btn btn-lg btn-outline-primary'>Back To Home</Link>
        </div>
    )
}
