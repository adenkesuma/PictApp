import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({handleSubmit, handleChange, photo}) => {

  console.log(photo)

  return (
    <>
      <form className='w-full flex justify-center items-center' onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          <FontAwesomeIcon className='xs:left-4 z-10 text-gray-500 absolute left-5' icon={faMagnifyingGlass}/>
          <input className='xs:px-10 xs:p-3 xs:w-[330px] sm:py-6 sm:px-8 sm:w-[350px] md:w-[540px] lg:py-4 lg:px-14 lg:w-[800px] rounded-lg border-2 outline-blue-400 bg-[#eaeaea] shadow-xl' value={photo} onChange={handleChange} id="search" type="text" placeholder="Type here..." />
          <button className='xs:py-2 bg-[#1a1a1a] text-white font-serif rounded-lg px-6 py-3 absolute right-2' type="button" onClick={handleSubmit}>
            Cari
          </button>
        </div>
      </form>
    </> 
  )
}

export default Search;
