import React from 'react';
import logo from '../../assets/logo.png';

const Navigation = () => {
    return (
        <nav className='px-4 py-3 fixed top-0 right-0 left-0 z-20 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg sm:py-5 sm:px-10 flex justify-between'>
            <figure>
                <img className='h-5 xs:h-6 sm:h-8 h-10' src={logo} alt="background image"/>
            </figure>
        </nav>
    )
}

export default Navigation;
