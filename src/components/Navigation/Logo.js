import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <>
      <figure>
        <Image className='xs:h-8 h-10' src={logo} alt="background image"/>
      </figure>
    </>
  )
}

export default Logo;
