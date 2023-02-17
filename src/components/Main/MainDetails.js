import React  from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainDetails = ({user, profile, location, download}) => {
    
    return (
        <div className='absolute bottom-2 right-2 left-2 duration-300 opacity-0 hover:opacity-100 z-50'>
            <div className='flex justify-between items-center p-2'>
                <span className='flex justify-center items-center gap-3'>
                    <img className='rounded-[50%]' src={profile.small} alt="user image" />
                    <p className='text-sm font-normal text-white'>User : {user} <br/> Location : {location}</p>
                </span>
                <a href={download+"&force=true"} className="bg-white py-2 px-4 rounded-sm shadow-xl" rel="nofollow" download >
                    <FontAwesomeIcon className='text-center text-black' icon={faArrowDown}/>
                </a>
            </div>
        </div>
    )
}

export default MainDetails;
