import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({handleSubmit, handleChange, photo}) => {

  console.log(photo)

  return (
    <>
      <form className='relative flex justify-center items-center w-full' onSubmit={handleSubmit}>
        <label className='xs:left-2 sm:left-2 absolute lg:left-4'>
          <FontAwesomeIcon className='z-10 text-gray-500' icon={faMagnifyingGlass}/>
          </label>
        <input className='xs:w-[320px] xs:py-2 xs:px-8 sm:py-2 sm:px-8 sm:w-[350px] md:w-[540px] lg:py-4 lg:px-10 lg:w-[800px] shadow-2xl rounded border-2 outline-blue-400 bg-[#eaeaea]' value={photo} onChange={handleChange} id="search" type="text" placeholder="Type here..." />
        <button className='xs:px-4 xs:py-2 sm:px-4 md:px-6 sm:py-[10px] sm:right-0 lg:py-[17px] absolute right-0 bg-gray-400 text-white rounded hover:bg-gray-600' type="button" onClick={handleSubmit}>Search</button>
      </form>
    </> 
  )
}

export default Search;
