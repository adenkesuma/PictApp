import React from 'react';
import Search from './Search';

const Header = ({handleChange, handleSubmit, photo}) => {
    return (
        <header className='relative px-4 w-full h-screen bg-HeroImage bg-cover bg-center'>
            <div className='pt-48 flex flex-col items-center'>
                <h1 className='text-[35px] text-[#1a1a1a] font-bold xs:text-[45px] sm:text-[55px] lg:text-[65px]'>PictApp</h1>
                <p className='text-[14px] text-center font-normal mb-3 xs:mb-3 xs:text-[16px] sm:font-semibold'>Search for any image you want and it's all available for free</p>
                <div>
                    <Search handleSubmit={handleSubmit} handleChange={handleChange} photo={photo}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
