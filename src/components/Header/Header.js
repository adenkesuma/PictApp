import React from 'react';
import Search from './Search';

const Header = ({handleChange, handleSubmit, photo}) => {
    return (
        <header className='relative w-full h-screen bg-HeroImage bg-cover bg-center'>
            <div className='pt-48 flex flex-col items-center'>
                <h1 className='xs:text-[65px] text-[100px] text-[#1a1a1a] font-bold'>PictApp</h1>
                <p className='xs:text-[18px] xs:mb-3 text-[30px] mb-5'>You can search for any image you want</p>
                <div>
                    <Search handleSubmit={handleSubmit} handleChange={handleChange} photo={photo}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
