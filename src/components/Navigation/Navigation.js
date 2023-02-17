import React from 'react';
import Logo from './Logo';

const Navigation = () => {
    return (
        <nav className='fixed top-0 right-0 left-0 z-20 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg py-5 px-10 flex justify-between'>
            <Logo />
        </nav>
    )
}

export default Navigation;
