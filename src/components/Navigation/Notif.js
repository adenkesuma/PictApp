import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Avatar, Stack } from '@chakra-ui/react'
import User from './User';

const Notif = () => {
  return (
    <>
        <ul className='xs:gap-[8px] md:gap-[20px] flex justify-center items-center z-40'>
            <li className='lg:block relative'>
                <Menu>
                    <MenuButton className='relative' as={Button}>
                        <FontAwesomeIcon className='xs:h-8 md:h-8 text-black' icon={faBell}/>
                        <span className='sm:px-1 sm:py-0 lg:px-2 lg:py-1 block absolute bottom-1 right-0 bg-red-700 text-white rounded-[50%] px-[6px] py-[2px] text-xs'>1</span>
                    </MenuButton>
                    <MenuList className="xs:p-2 lg:p-4 bg-blue-300 shadow-2xl p-4 rounded-lg">
                        <p className='sm:text-sm text-lg font-semibold mb-2 font-serif'>Notification :</p>
                        <MenuItem className="relative text-sm text-black flex justify-between items-start gap-2">
                            <Stack className='relative' direction='row'>
                                <Avatar className="sm:px-2 sm:py-0 bg-white px-3 py-[5px] rounded-[50%] text-black font-bold text-lg" name='Aden' src='https://bit.ly/broken-link' />
                                <span className='sm:p-[6px] rounded-[50%] bg-green-500 absolute -bottom-1 right-0 p-2'></span>
                            </Stack>
                            <p className='xs:p-2 sm:text-xs lg:p-4 bg-white py-2 px-[10px] rounded-lg font-sans font-normal text-sm'>Terimakasih sudah menggunakan website kami<br /> untuk kebutuhan anda.</p>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </li>
            <li className='list-none'>
                <FontAwesomeIcon className="sm:h-4 sm:w-4 md:w-6 md:h-6 bg-gray-400 rounded-[50%] text-gray-600 w-6 h-6 p-1" icon={faUser}/>
            </li>
            <li>
                <User />
            </li>
        </ul>
    </>
  )
}

export default Notif;
