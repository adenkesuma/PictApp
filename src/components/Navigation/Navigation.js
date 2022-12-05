import React from 'react';
import Logo from './Logo';
import Notif from './Notif';
import Animation from '../Animate/Animation';

const Navigation = () => {
    return (
        <div className='fixed top-0 right-0 left-0 z-20'>
            <nav className='xs:shadow-sm xs:h-[60px] xs:px-2 md:h-20 md:px-12 lg:px-20 h-20 bg-white flex justify-between items-center gap-2 px-20 '>
                <Logo />
                <Notif />
            </nav>
            <Animation />
        </div>
    )
}

export default Navigation;
