import React from 'react';
import Search from './Search';
import ImageBottom from '../../assets/logo.png';
import PictApp from '../../assets/PictApp.png';
import { Image } from '@chakra-ui/react';

const Header = ({handleChange, handleSubmit, photo}) => {
    return (
        <header className='relative w-full h-screen bg-black bg-backgroundHeader bg-cover bg-center'>
            <Image className="xs:left-[5%] xs:top-[35%] xs:h-10 sm:left-[10%] sm:top-[36%] md:top-[36%] md:left-[10%] lg:top-[35%] lg:left-[20%] lg:h-16 absolute" src={PictApp} alt="Heading 1 text"/>
            <p className='xs:left-[5%] xs:top-[41%] sm:text-sm sm:top-[42%] sm:left-[10%] absolute lg:top-[46%] lg:left-[20%] font-semibold text-black'>You can search for any image you want</p>
            <span className='xs:left-[5%] xs:top-[46%] sm:left-[10%] sm:top-[46%] lg:left-[20%] lg:top-[52%] block absolute'>
                <Search handleSubmit={handleSubmit} handleChange={handleChange} photo={photo}/>
            </span>
            <figure className='sm:bottom-3 sm:right-3 absolute bottom-5 right-5 flex justify-center items-end flex-col gap-1'>
                <Image className='sm:h-5 h-7 text-center' src={ImageBottom} alt="image"/>
                <figcaption className="text-xs font-semibold">All you need to create a website</figcaption>
            </figure>
        </header>
    )
}

export default Header;
