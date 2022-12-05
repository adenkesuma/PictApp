import React from 'react';
import './Animation.css';

const Animation = () => {
  return (
    <span className='lg:h-12 relative h-8 block bg-black'>
       <div class="relative marquee-container flex items-center">
            <div class="xs:pt-2 lg:pt-[12px] marquee flex justify-around">
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Pint<b className="-ml-2 text-blue-500">erest</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Free<b className="-ml-2 text-blue-500">pik</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Unsp<b className="-ml-2 text-blue-500">lash</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Pex<b className="-ml-2 text-blue-500">els</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Pixa<b className="-ml-2 text-blue-500">bay</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Free<b className="-ml-2 text-blue-500">Images</b></span>
            </div>
            <div class="xs:pt-2 lg:pt-[12px] marquee marquee2 flex justify-around text-red">
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Pint<b className="-ml-2 text-blue-500">erest</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Free<b className="-ml-2 text-blue-500">pik</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Unsp<b className="-ml-2 text-blue-500">lash</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Pex<b className="-ml-2 text-blue-500">els</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Pixa<b className="-ml-2 text-blue-500">bay</b></span>
              <span className="xs:text-xs lg:text-sm text-xl font-serif text-white">Free<b className="-ml-2 text-blue-500">Images</b></span>
            </div>
        </div>
    </span>
  )
}

export default Animation;
