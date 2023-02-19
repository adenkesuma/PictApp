import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({handleSubmit, handleChange, photo}) => {

  console.log(photo)

  return (
    <>
      <form className='w-full flex justify-center items-center' onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          <FontAwesomeIcon className='left-2 xs:left-4 z-10 text-gray-500 absolute' icon={faMagnifyingGlass}/>
          <input className='py-2 px-8 rounded-lg outline-blue-400 bg-[#fff] shadow-xl xs:py-3 xs:px-12 xs:w-[300px] sm:w-[390px] md:w-[630px] lg:w-[800px]' value={photo} onChange={handleChange} id="search" type="text" placeholder="Type here..." />
          <button className='py-1 px-4 bg-[#1a1a1a] text-white font-serif rounded-lg absolute right-1 xs:py-2 xs:right-1' type="button" onClick={handleSubmit}>
            Cari
          </button>
        </div>
      </form>
    </> 
  )
}

export default Search;
